require("../Array.addons.js");
const Y = require("../Y.js");


const insertionSort = Y(() => (items, result = []) =>
    items.isEmpty() ?
        result
    : 	insertionSort(items.tail(), result.insert(items.head(), result.findIndex(r => r > items.head()))));

console.log(insertionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
