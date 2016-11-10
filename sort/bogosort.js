"use strict";
require("../Array.addons.js");
const Y = require("../Y.js");

const bogosort = Y(() => (items) =>
	items.isSorted() ?
        items
    :   bogosort(items.shuffle())
);

console.log(bogosort([6, 4, 7, 9, -2, 7, 90, 5, 2]));
