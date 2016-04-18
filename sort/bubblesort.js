// node --harmony-destructuring --harmony_default_parameters sort/bubblesort.js
"use strict";

require("../Array.addons.js");

console.log(bubblesort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function bubblesort(items, i=items.length) {
    if (items.tail().isEmpty()) {
        return items;
    }

    while(i --> 1) {
        if (items[i] < items[i-1]) {
            items.swap(i, i-1);
        }
    }

    return [items.head()].concat(bubblesort(items.tail()));
}
