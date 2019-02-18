const {Wrapper, wrap, plus, plus3} = require('./Wrapper.js');

class Empty {
  map(f) {
    return this;
  }

  fmap(_) {
    return new Empty();
  }

  toString() {
    return `Empty ()`;
  }
}

const empty = () => new Empty();

const isEven = n => Number.isFinite(n) && n % 2 == 0;
const half = val => (isEven(val) ? wrap(val / 2) : empty());

console.log(half(4).fmap(plus3))
console.log(half(3).fmap(plus3))
