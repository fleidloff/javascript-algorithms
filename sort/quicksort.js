const Y = require("../Y.js");
const I = require("immutable");

const quickSort = Y((items, pivot = items.first()) =>
    items.rest().isEmpty() ?
        items
    : 	combine(items.rest().filter(it => it < pivot), items.rest().filter(it => !(it < pivot)), pivot));

const combine = ( left, right , pivot) => 
    quickSort(left).concat(pivot).concat(quickSort(right));

console.log(quickSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
