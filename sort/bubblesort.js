const Y = require("../Y.js");
const I = require("immutable");
const match = require("js-pattern-matching");


const bubblesort = Y((items) =>
    match(items.rest().isEmpty()) (
        (v = true) => items,
        (_) => combine(bubble(items))
    ));

const combine = (items) =>
    bubblesort(items.butLast()).push(items.last());

// biggest element is bubbled to last position
const bubble = (items) =>
    items.reduce((memo, item, idx) =>
        memo.get(idx) > memo.get(idx + 1) ?
            memo
                .set(idx, memo.get(idx + 1))
                .set(idx + 1, memo.get(idx))
        : memo
    , items);

console.log(bubblesort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
