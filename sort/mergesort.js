require("../Array.addons.js");
const Y = require("../Y.js");


const mergeSort = Y(() => (items) =>
    items.tail().isEmpty() ?
        items 
    :   merge(mergeSort(items.left()), mergeSort(items.right())));


const merge = Y(() => (left, right, result = []) =>
    left.isEmpty() || right.isEmpty() ?
        result.concat(left).concat(right) :
    left.head() <= right.head() ?  
        merge(left.tail(), right, result.concat(left.head())) 
    :   merge(left, right.tail(), result.concat(right.head())));


console.log(mergeSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
