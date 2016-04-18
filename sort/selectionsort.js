// node --harmony-destructuring --harmony_default_parameters sort/selectionsort.js
"use strict";

require("../Array.addons.js");

console.log(selectionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function selectionsort(items, i=items.length) {
    if (items.tail().isEmpty()) {
        return items;
    }

    while(i --> 1) {
        if (items[i] < items.head()) {
            items.swap(i, 0, items);
        }
    }

    return [items.head()].concat(selectionsort(items.tail()));
}