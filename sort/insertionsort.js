const I = require("immutable");

const insertionSort = (items) =>
    items.reduce((memo, item) =>
        memo.insert(memo.push(item).findIndex(r => r >= item), item)
    , I.List());

const positive = (n) => n < 0 ? 0 : n;

console.log(insertionSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
