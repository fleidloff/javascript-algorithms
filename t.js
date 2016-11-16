const I = require("immutable")

const match = (item) => (strings, ...values) => {
    console.log("strings", strings[0].split("\n").map(s => s.trim()));
    const vals = new I.List(strings).skip(1).map(s => s.match(/"((?!").)*"/g)[0]); 
    const keys = new I.List(values).butLast(); 

    return vals.get(keys.findIndex(it => it === item));
};

console.log(match(4) `
    3 => "foo"
    4 => "bar"
    * => "none"
`);

setTimeout(() => {

}, time `1 second`);