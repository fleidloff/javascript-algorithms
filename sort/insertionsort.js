// node --harmony-destructuring --harmony_default_parameters sort/insertionsort.js
"use strict";

require("../Array.addons.js");

console.log(insertionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function insertionsort(items, result = []) {
    if (items.isEmpty()) {
        return result;
    }
    let pos;
    pos = result.some((el, idx) => {
        pos=idx;
        return el > items.head();
    }) ? pos : result.length;
    
    return insertionsort(items.tail(), result.insert(items.head(), pos));
}