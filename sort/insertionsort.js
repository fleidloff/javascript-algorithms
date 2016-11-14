const I = require("immutable");
const { List } = require("extendable-immutable");

class InsertionSort extends List {

    sort() {
        return this.reduce((memo, item) =>
            memo.insert(memo.findIndex((r) => r >= item), item)
        , new List());
    }

    findIndex(condition) {
        const idx = super.findIndex(condition);
        return idx < 0 ?
            this.count() :
            idx;
    }
}

console.log(new InsertionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]).sort());
