const I = require("immutable");


const radixSort = (items) =>
	I.Range(1, Infinity)
		.take(longestNumberDigits(items))
		.reduce((memo, n) => 
			memo.sort((a, b) => nthDigit(a, n) > nthDigit(b, n))
		, items);

const nthDigit = (value, n) =>
	Math.floor(value / Math.pow(10, n - 1) % 10);

const longestNumberDigits = (items) =>
	items
		.map(Math.abs)
		.reduce((memo, item) =>
			item > memo ? 
				item
			: 	memo
		, 0)
		.toString()
		.length;

console.log(radixSort(I.fromJS([6, 4, 7, 9, 1111, -4, 5, 2, 5, 90])));
