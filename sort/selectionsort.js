const Y = require("../Y.js");
const I = require("immutable");

const selectionSort = Y((items) =>
    items.rest().isEmpty() ?
        items
    : 	combine(smallestToTheTop(items)));

const combine = (items) => 
	I.List.of(items.first()).concat(selectionSort(items.rest()));

const smallestToTheTop = (items) => 
	items
		.set(0, items.get(smallest(items)))
		.set(smallest(items), items.get(0));

const smallest = (items) => 
	items.reduce((memo, item, idx) => item < items.get(memo) ? idx : memo, 0);

console.log(selectionSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
