const Y = require("../Y.js");
const I = require("immutable");

const selectionSort = Y((items) =>
    items.rest().isEmpty() ?
        items
    : combine(smallestToTheTop(items)));

const combine = (items) =>
    selectionSort(items.rest()).unshift(items.first());

const smallestToTheTop = (items) =>
    toTheTop(items, smallest(items));

const toTheTop = (items, idx) =>
    items
        .set(0, items.get(idx))
        .set(idx, items.get(0));

const smallest = (items) =>
    items.reduce((memo, item, idx) => item < items.get(memo) ? idx : memo, 0);

console.log(selectionSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
