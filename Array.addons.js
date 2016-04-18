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

Array.prototype.insert = function(item, pos = 0) {
    this.splice(pos >=0 ? pos : this.length, 0, item);
    return this;
}

Array.prototype.filterOne = function(fun, { returnIndex } = {}) {
    for (var i = 0; i < this.length; i++) {
        if (fun(this[i])) {
          return returnIndex ? i : this[i];
        }
    }
    return returnIndex ? -1 : undefined;
};

Array.prototype.filterLeftRight = function(fun) {
    const left = [];
    const right = [];
    for (var i = 0; i < this.length; i++) {
        if (fun(this[i])) {
            left.push(this[i]);
        } else {
            right.push(this[i]);
        }
    }
    return { left, right };
};

Array.prototype.swap = function (x, y, arr=this.slice()) {
    arr[x] = arr.splice(y, 1, arr[x]).head();
    return arr;
}
