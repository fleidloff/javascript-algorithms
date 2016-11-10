require("../Array.addons.js");
const Y = require("../Y.js");

const selectionSort = Y((items) =>
    items.tail().isEmpty() ?
        items
    : 	combine(smallestToTheTop(items)));

const combine = (items) => 
	[items.head()].concat(selectionSort(items.tail()));

const smallestToTheTop = (items) => 
	items.swap(0, smallest(items));

const smallest = (items) => 
	items.reduce((memo, item, idx) => item < items[memo] ? idx : memo, 0);

console.log(selectionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
