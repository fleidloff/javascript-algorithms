const Y2 = (F) => ((x) => F((y) => (x(x))(y)))((x) => F((y) => (x(x))(y)));

const Y = (F) => Y2(() => F);

module.exports = Y;
