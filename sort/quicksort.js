require("../Array.addons.js");
const Y = require("../Y.js");

const quickSort = Y(() => (items, pivot = items.head()) =>
    items.tail().isEmpty() ?
        items
    : 	combine(items.tail().filterLeftRight(it => it < pivot), pivot));

const combine = ({ left, right }, pivot) => 
    quickSort(left).concat(pivot).concat(quickSort(right));

console.log(quickSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
