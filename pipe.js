function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const a = [1, 2, 3];

// console.log(JSON.parse(JSON.stringify(shuffle(a))));
const pipe = (...funs) => (input) => funs.reduce((memo, fun) => typeof fun === "function" ? fun(memo) : fun, input);

const res = pipe(
  a,
  shuffle, 
  JSON.stringify, 
  JSON.parse
)();

console.log(res);
