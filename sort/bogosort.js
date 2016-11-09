require("../Array.addons.js");

console.log(bogosort([6, 4, 7, 9, -2, 7, 90, 5, 2]));

function bogosort(items) {
	while (!items.isSorted()) {
		items.shuffle()	
	} 

	return items; 
}
