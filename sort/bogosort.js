// node --harmony sort/bogosort.js
"use strict"; // eslint-disable-line
const Y = require("../Y.js");
const I = require("immutable");

const bogoSort = Y((items) =>
    isSorted(items) ?
        items :
        bogoSort(shuffle(items)));

const isSorted = (items) =>
    items.sort().equals(items);

const shuffle = (items) =>
    items.reduce((memo, item, idx) => {
      const rnd = Math.floor(Math.random() * items.count());
      return memo
            .set(idx, memo.get(rnd))
            .set(rnd, memo.get(idx));
    }, items);

console.log(bogoSort(I.fromJS([6, 4, 7, 9, -2, 7, 90, 5, 2])));
