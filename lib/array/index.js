const { mandatory } = require("../index"); 

function rest(items = mandatory()) {
	return items.slice(1);
}

function isEmpty(items = mandatory()) {
	isArray(items);
	return items.length === 0;
}

const isArray = (el, msg = "wrong type: must be array") => {
	if (typeof el !== "object" && typeof el.length !== "function") {
		throw new Error (msg); 
	}
}

function last(items = mandatory()) {
	return items[items.length - 1];
}

function butLast(items = mandatory()) {
	return items.slice(0, items.length - 1);
}

function swap(idx1, idx2) {
	return (items = mandatory()) => {
		const tmp = items[idx1];
		items[idx1] = items[idx2];
		items[idx2] = tmp;

		return items;
	}
}

function push(...item) {
	return (items = mandatory()) => {
		items.push(...item);
		return items;
	}
}

function forEach(fun) {
	return (items = mandatory()) => {
		items.forEach(fun);

		return items;
	}
}

module.exports = {
	rest,
	isEmpty,
	last,
	butLast,
	swap,
	push,
	forEach
};
