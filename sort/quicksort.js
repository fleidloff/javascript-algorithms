// node --harmony-destructuring --harmony_default_parameters sort/quicksort.js

require("../Array.addons.js");

console.log(quicksort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));


function quicksort(items, left = 0, right = items.length -1) {
    var index;
    if(!items.tail().isEmpty()) {
       index = partition(items, left, right);
       if (left < index - 1) {
           quicksort(items, left, index - 1);
       }
    
       if (index < right) {
           quicksort(items, index, right);
       }
    }
    
    return items;
    
}


function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}