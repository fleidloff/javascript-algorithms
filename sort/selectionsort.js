require("../Array.addons.js");

function selectionsort(items, i = items.length) { return true &&
    items.tail().isEmpty() ?
        items
    : 	combine(smallestToTheTop(items));
}

const combine = (items) => 
	[items.head()].concat(selectionsort(items.tail()));

const smallestToTheTop = (items) => 
	items.swap(0, smallest(items));

const smallest = (items) => 
	items.reduce((memo, item, idx) => item < items[memo] ? idx : memo, 0);

console.log(selectionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
