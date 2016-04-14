Array.prototype.isEmpty = function() {
    return this.length === 0;
};

Array.prototype.head = function() {
    return this[0] || null;
};

Array.prototype.tail = function() {
    return this.length > 1 ? this.slice(1) : [];
}; 

Array.prototype.left = function() {
    return this.slice(0, this.length / 2);
};

Array.prototype.right = function() {
    return this.slice(this.length / 2, this.length);
};

const list = [6, 4, 7, 9, 11, -4, 5, 2, 5, 90];

function mergeSort(l) {
    if (l.tail().isEmpty()) {
        return l;
    }
    return merge(mergeSort(l.left()), mergeSort(l.right()));
}

function merge(l, r ) {
    const result = [];

    while(!l.isEmpty() && !r.isEmpty()) {
        switch(true) {
            case l.head() <= r.head():
                result.push(l.head());
                l = l.tail();
                break;
            default:
                result.push(r.head());
                r = r.tail();
        }
    }

    return result.concat(l).concat(r);;
}

console.log(mergeSort(list));