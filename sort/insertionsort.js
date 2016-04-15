// node --harmony-destructuring --harmony_default_parameters sort/insertionsort.js
"use strict";

require("../Array.addons.js");

console.log(insertionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function insertionsort(items, result = []) {
    if (items.isEmpty()) {
        return result;
    }

    const pos = Number.map(
        result.indexOf(
            Math.min(
                ...result.filter(r => r > items.head())
            )
        ), 
        Number.negative, 
        result.length
    );
    
    return insertionsort(items.tail(), result.insert(items.head(), pos));
}