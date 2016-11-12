const Y = require("../Y.js");
const I = require("immutable");

const quickSort = Y((items, pivot = items.first()) =>
    items.rest().isEmpty() ?
        items
    :   combine(leftRight(items.rest(), it => it < pivot).concat(pivot)));

const leftRight = (items, condition) =>
    [condition, not(condition)].map((condition) =>
            items.filter(condition));

const combine = ( [left, right , pivot] ) => 
    quickSort(left).concat(pivot).concat(quickSort(right));

const not = (func) =>
    (...params) => !func(...params);

console.log(quickSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
