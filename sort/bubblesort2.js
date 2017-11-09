const { mandatory, pipeify, pipe, jsMatch, ifTrue, match, not } = require("../lib"); 
const { rest, isEmpty, swap, push, last, butLast, forEach } = require("../lib/array"); 

// todo: type checking in piped methods
// todo: write own pattern matching more clever (takes isEmpty as input)


function bubblesort(items = mandatory()) {
    if (items._(rest, not(isEmpty))) {
        return items._(bubble, combine);
    } 
    
    return items;  
}

function combine(items = mandatory()) { // items.length >= 2
    return items._(butLast, bubblesort, push(items._(last)));
}

function bubble(items = mandatory()) {
    return items._(forEach((item, idx) => {
       if (items[idx] > items[idx + 1]) {
            items._(swap(idx, idx + 1));
       }
    }));
}

pipeify([6, 4, 7, 9, 11, -4, 5, 2, 5, 90])._(bubblesort, console.log);
