Array.prototype.isEmpty = function() {
    return this.length === 0;
};

Array.prototype.head = function() {
    return this[0] || false;
};

Array.prototype.tail = function() {
    return this.length > 1 ? this.slice(1) : false;
}; 

const a = [1, 2, 3];
const tail = a.tail().tail();

console.log(true === !!tail, tail);