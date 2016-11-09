require("../Array.addons.js");

console.log(quicksort([6, 4, 7, 9, 11, -4, 5, 2, 5, 90]));

function quicksort(items, pivot = items.head()) {
    if (items.tail().isEmpty()) {
        return items;
    }

    const { left, right } = items.tail().filterLeftRight(it => it < pivot);

    return quicksort(left).concat(pivot).concat(quicksort(right));
}
