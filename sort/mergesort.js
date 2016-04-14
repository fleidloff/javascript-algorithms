// node --harmony-destructuring --harmony_default_parameters sort/mergesort.js

require("../Array.addons.js");

const list = [6, 4, 7, 9, 11, -4, 5, 2, 5, 90];
console.log(mergeSort(list));

function mergeSort(arr) {
    if (arr.tail().isEmpty()) {
        return arr;
    }
    return merge(mergeSort(arr.left()), mergeSort(arr.right()));
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
