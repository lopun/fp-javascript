const R = require('ramda');

class Wrapper {
  constructor(value) {
    this._value = value;
  }

  map(f) {
    return f(this._value);
  }

  fmap(f) {
    return new Wrapper(f(this._value));
  }

  toString() {
    return `Wrapper (${this._value})`;
  }
}

const wrap = val => new Wrapper(val);

const plus = R.curry((a, b) => a + b);
const plus3 = plus(3);

const two = wrap(2);

const five = two.fmap(plus3);
console.log(five.map(R.identity));

module.exports = {
  Wrapper,
  wrap,
  plus3,
  plus
};
