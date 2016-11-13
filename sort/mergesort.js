const Y = require("../Y.js");
const I = require("immutable");

const mergeSort = Y((items) =>
    items.rest().isEmpty() ?
        items :
        combine(items));

const combine = (items, half = items.count() / 2) =>
    merge(
        mergeSort(items.take(half)),
        mergeSort(items.skip(half))
    );

const merge = Y((left, right, result = new I.List()) =>
    left.isEmpty() || right.isEmpty() ?
        result.concat(left).concat(right) :
    left.first() <= right.first() ?
        merge(left.rest(), right, result.concat(left.first())) :
        merge(left, right.rest(), result.concat(right.first())));

console.log(mergeSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
