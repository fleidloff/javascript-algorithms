const I = require("immutable");
const { List } = require("extendable-immutable");

class InsertionSort extends List {

    sort = (compare = (a, b) => b >= a) =>
         this.reduce((memo, item) =>
            memo.insert(memo.findIndex((it) => compare(item, it)), item)
        , new List());

    findIndex = (condition) => {
        const idx = this.super.findIndex(condition);

        return idx < 0 ?
            this.count() :
            idx;
    }

}

console.log(new InsertionSort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]).sort());
