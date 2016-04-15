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
    this.splice(pos, 0, item);
    return this;
}
