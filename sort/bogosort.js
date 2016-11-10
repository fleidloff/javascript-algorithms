// node --harmony sort/bogosort.js
"use strict";
require("../Array.addons.js");
const Y = require("../Y.js");

const bogoSort = Y((items) =>
	items.isSorted() ?
        items
    :   bogoSort(items.shuffle()));

console.log(bogoSort([6, 4, 7, 9, -2, 7, 90, 5, 2]));
