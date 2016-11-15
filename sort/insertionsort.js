const I = require("immutable");

const InsertionSort = (list, compare = defaultCompare) =>
    list.reduce((memo, item) =>
        memo.insert(
            findPositiveIndex(memo, compareToBool(compare, item)),
            item
        )
    , new I.List());

const defaultCompare = (a, b) => b >= a;

const findPositiveIndex = (list, condition) => {
  const idx = list.findIndex(condition);
  return idx < 0 ?
        list.count() :
        idx;
};

const compareToBool = (compare, item) => (it) => {
    const compareResult = compare(item, it);

    return typeof compareResult === "boolean" ?
        compareResult :
        compareResult === -1
};


console.log(InsertionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
console.log(InsertionSort("Frederik".split(""), (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
