// node --harmony-destructuring --harmony_default_parameters sort/insertionsort.js
"use strict";

require("../Array.addons.js");

console.log(insertionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function insertionsort(items, result = []) {
    if (items.isEmpty()) {
        return result;
    }

    const pos = result.findIndex(r => r > items.head());

    return insertionsort(items.tail(), result.insert(items.head(), pos));
}
