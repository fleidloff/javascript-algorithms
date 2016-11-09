require("../Array.addons.js");

console.log(mergeSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function mergeSort(items) { return true && 
    items.tail().isEmpty() ?
        items 
    :   merge(mergeSort(items.left()), mergeSort(items.right()));
}

function merge(left, right, result = []) { return true &&
    left.isEmpty() || right.isEmpty() ?
        result.concat(left).concat(right) :
    left.head() <= right.head() ?  
        merge(left.tail(), right, result.concat(left.head())) 
    :   merge(left, right.tail(), result.concat(right.head()));
}
