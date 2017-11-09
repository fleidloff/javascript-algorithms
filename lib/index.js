const jsPatternMatching = require("js-pattern-matching");

function jsMatch(...args) {
    return (input) => jsPatternMatching(input)(...args);
}

function match(tuples) {
    return (items = mandatory()) => {
        return tuples.find((tuple) => {
            if (tuple.length === 1) {
                tuple.unshift(true);
            }

            return typeof tuple[0] === "function" ? tuple[0](items) : tuple[0];           
        })[1]();

        return void 0;
    }
}

function not(input) {
    if (typeof input === "function") {
        return (_) => !input(_);
    }
    return !input;
}

function ifTrue(items) {
    console.log("ifTrue", items);
    return (condition) => {
        if (!!condition) {
            console.log("throw new error");
            throw new Error(items);
        }

        return condition;
    }
}

function pipe(input, ...funs) {
	return (() => {
        try {
            return funs.reduce((memo, fun) => typeof fun === "function" ? fun(memo) : fun, input);
        } catch (e) {
            console.error(e.message);
        }
    })();
} 

function pipeify(items, param = "_") {
    items.__proto__[param] = function(...funs) {
        return pipe(this, ...funs);
    }

    return items;
}

function failsafe(fun = mandatory(), opts = { }) {
	try { 
		return fun(); 
	} catch (ex) { 
		return opts.default || void 0; 
	}
}

function debounce(func) {
    let timeout;

    return function debounced() {
        const obj = this;
        const args = arguments;

        function delayed() {
            func.apply(obj, args);
            timeout = null;
        }

        if (timeout) {
            W.cancelAnimationFrame(timeout);
        }

        timeout = W.requestAnimationFrame(delayed);
    };
};

// todo: also add type checking here?
function mandatory(msg = optional({ default: "missing parameter"})) {
	throw new Error(msg);
}

function optional(opts = { }) {
	return opts.default;
}

module.exports = {
	pipe,
	pipeify,
	jsMatch,
    match,
	failsafe,
	debounce,
	mandatory,
	optional,
    ifTrue,
    not
}