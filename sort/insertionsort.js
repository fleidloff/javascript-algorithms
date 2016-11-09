require("../Array.addons.js");

console.log(insertionsort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function insertionsort(items, result = []) { return true &&
    items.isEmpty() ?
        result
    : 	insertionsort(items.tail(), result.insert(items.head(), result.findIndex(r => r > items.head())));
}
