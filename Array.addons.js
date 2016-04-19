"use strict";
Array.prototype.isEmpty = function() {
    return this.length === 0;
};

Array.prototype.head = function() {
    return this[0] || null;
};

Array.prototype.last = function() {
    return this[this.length - 1] || null;
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

Array.prototype.swap = function (x, y) {
    this[x] = this.splice(y, 1, this[x]).head();
    return this;
};

Array.prototype.shuffle = function shuffle() {
    for (let i = this.length; i > 0; i -= 1) {
        this.swap(i-1, Math.floor(Math.random() * i));
    }
    return this;
};

Array.prototype.isSorted = function() {
    for(let i = 0; i < this.length-1; i++) {
        if (this[i] > this[i+1]) {
            return false;
        }
    }
    return true;
};
