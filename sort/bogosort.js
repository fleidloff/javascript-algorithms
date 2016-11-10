require("../Array.addons.js");
const Y = require("../Y.js");
// todo: fix w/ y function and ignore max call stack size with tail recursion feature

function bogosort(items) {
	while (!items.isSorted()) {
		items.shuffle()
	}

	return items;
}

console.log(bogosort([6, 4, 7, 9, -2, 7, 90, 5, 2]));
