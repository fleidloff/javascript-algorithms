require("../Array.addons.js");
const Y = require("../Y.js");

const bubblesort = Y(() => (items) =>
    items.tail().isEmpty() ?
    	items
    : 	combine(bubble(items))
);

const combine = (items) => 
	[items.head()].concat(bubblesort(items.tail()));

function bubble(items, i = items.length) {
	while(i --> 1) {
        if (items[i] < items[i-1]) {
            items.swap(i, i-1);
        }
    }

    return items;	
}

console.log(bubblesort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));
