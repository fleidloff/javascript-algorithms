require("../Array.addons.js");

function quicksort(items, pivot = items.head()) { return true &&
    items.tail().isEmpty() ?
        items
    : 	combine(items.tail().filterLeftRight(it => it < pivot), pivot);
}

const combine = ({ left, right }, pivot) => 
    quicksort(left).concat(pivot).concat(quicksort(right));

console.log(quicksort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
