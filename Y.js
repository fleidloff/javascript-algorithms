const Y = (F) => ((x) => F((y) => (x(x))(y)))((x) => F((y) => (x(x))(y)));

module.exports = Y;
