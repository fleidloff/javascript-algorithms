require("../Array.addons.js");
const Y = require("../Y.js");


const insertionSort = (items) =>
    items.reduce((memo, item) =>
        memo.insert(item, memo.findIndex(r => r > item))
    , []);

console.log(insertionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
