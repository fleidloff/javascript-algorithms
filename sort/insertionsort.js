// node --harmony-destructuring --harmony_default_parameters sort/insertionsort.js
"use strict";

require("../Array.addons.js");

console.log(insertionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function insertionsort(items, result = []) {
    if (items.isEmpty()) {
        return result;
    }

    let pos = 0;
    for(let i = 0; i < result.length; i++) {
        if (items.head() >= result[i]) {
            pos = i;
        }
    }
    
    result.splice(pos, 0, items.head());
    return insertionsort(items.tail(), result);
}