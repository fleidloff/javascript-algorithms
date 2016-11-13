const Y = require("../Y.js");
const I = require("immutable");

const quickSort = Y((items, pivot = items.first()) =>
    items.rest().isEmpty() ?
        items
    : combine(leftRight(items.rest(), (it) => it < pivot).concat(pivot)));

const leftRight = (items, condition) =>
    I.List.of(condition, not(condition)).map((leftOrRight) =>
            items.filter(leftOrRight));

const combine = ([left, right, pivot]) =>
    quickSort(left)
        .push(pivot)
        .push(quickSort(right))
        .flatten();

const not = (func) =>
    (...params) => !func(...params);

console.log(quickSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
