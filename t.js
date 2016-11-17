const I = require("immutable")

const match = (item) => (strings, ...values) => {
    const vals = new I.List(strings).skip(1).map(s => s.match(/"((?!").)*"/g)[0]);
    const keys = new I.List(values).butLast(); 

    return vals.get(keys.findIndex(it => it === item));
};

console.log(match(4) `
    3 => "foo"
    4 => "bar"
    * => "none"
`);



const wait = (strings) =>
    new Promise((resolve, reject) =>
        setTimeout(resolve, new Number(strings[0]))
    );




const elvis = (strings, ...values) => {
    const obj = values[0];
    const keys = strings.filter(s => s.length > 0)[0].split(".").filter(s => s.length > 0);

    return keys.reduce((memo, it) => {
        if (typeof memo === "undefined" || typeof memo[it] === "undefined") {
            return undefined;
        }
        return memo[it];
    }, obj);


};

const a = { b: 2, c: { d: 5 } };


console.log(elvis`${a}.b.c.d`);

wait `1000`.then(() => {
    console.log("foo");
});