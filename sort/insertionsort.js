const I = require("immutable");


function InsertionSort(list, compare = (a, b) => b >= a) {
    return list.reduce((memo, item) => 
        memo.insert(
            findPositiveIndex(memo, (it) => compareToBool(compare(item, it))), 
            item
        )
    , new I.List());
}

function findPositiveIndex(list, condition) {
    const idx = list.findIndex(condition);

    return idx < 0 ?
        list.count() :
        idx;
};

function compareToBool(compareResult) { 
    return typeof compareResult === "boolean" ?
        compareResult :
        compareResult === -1;
}

console.log(InsertionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
console.log(InsertionSort("Frederik".split(""), (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
