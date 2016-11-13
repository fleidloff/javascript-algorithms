const I = require("immutable");

const insertionSort = (items) =>
    items.reduce((memo, item) =>
        memo.insert(findIndex(memo, (r) => r >= item), item)
    , new I.List());

const findIndex = (items, condition, idx = items.findIndex(condition)) =>
    idx < 0 ?
        items.count() :
        idx;

console.log(insertionSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
