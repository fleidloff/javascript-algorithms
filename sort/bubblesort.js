require("../Array.addons.js");
const Y = require("../Y.js");

const bubblesort = Y((items) =>
    items.tail().isEmpty() ?
    	items
    : 	combine(bubble(items)));

const combine = (items) =>
	bubblesort(items.heads()).concat([items.last()]);

// biggest element is bubbled to last position
const bubble = (items = []) =>
	items.reduce((memo, item, idx) =>
		memo[idx] > memo[idx+1] ?
			memo.swap(idx, idx+1)
		: 	memo
	, items);

console.log(bubblesort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
