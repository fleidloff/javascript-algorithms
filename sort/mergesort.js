const Y = require("../Y.js");
const I = require("immutable");

const mergeSort = Y((items) =>
    items.rest().isEmpty() ?
        items 
    :   merge(mergeSort(items.take(items.count()/2)), mergeSort(items.skip(items.count()/2))));

const merge = Y((left, right, result = new I.List()) => 
    left.isEmpty() || right.isEmpty() ?
        result.concat(left).concat(right) :
    left.first() <= right.first() ?  
        merge(left.rest(), right, result.concat(left.first())) 
    :   merge(left, right.rest(), result.concat(right.first())));

console.log(mergeSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
