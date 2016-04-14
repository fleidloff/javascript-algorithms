// node --harmony-destructuring --harmony_default_parameters sort/mergesort.js

require("../Array.addons.js");

console.log(mergeSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function mergeSort(items) {
    if (items.tail().isEmpty()) {
        return items;
    }
    return merge(mergeSort(items.left()), mergeSort(items.right()));
}

function merge(left, right, result = []) {
    switch(true) {
        case left.isEmpty() || right.isEmpty():
            return result.concat(left).concat(right);
        case left.head() <= right.head():
            return merge(left.tail(), right, result.concat(left.head()));
        default:
            return merge(left, right.tail(), result.concat(right.head()));
    }
}
