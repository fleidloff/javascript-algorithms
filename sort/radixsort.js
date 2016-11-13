const Y = require("../Y.js");
const I = require("immutable");


const radixSort = (items) =>
	I.Range(1, Infinity)
		.take(longestNumber(items))
		.reduce((memo, n) => 
			memo.sort((a, b) => nthDigit(a, n) > nthDigit(b, n))
		, items);

const nthDigit = (value, n) =>
	Math.floor(value / Math.pow(10, n - 1) % 10);

const longestNumber = (items) =>
	items
		.map(Math.abs)
		.reduce((memo, item) =>
			item > memo ? 
				item
			: 	memo
		, 0);

console.log(radixSort(I.fromJS([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])));
