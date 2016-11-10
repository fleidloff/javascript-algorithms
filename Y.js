const Y1 = (F) => ((x) => F((y) => (x(x))(y)))((x) => F((y) => (x(x))(y)));

const Y2 = (F) => Y1(() => F);

const Y = G => ((F) => ((x) => F((y) => (x(x))(y)))((x) => F((y) => (x(x))(y))))(() => G);

module.exports = Y;
