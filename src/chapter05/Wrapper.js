const R = require('ramda');

class Wrapper {
  constructor(value) {
    this._value = value;
  }

  static of(a) {
    return new Wrapper(a);
  }

  map(f) {
    return Wrapper.of(f(this._value));
  }

  join() {
    if (!(this._value instanceof Wrapper)) {
      return this;
    }
    return this._value.join();
  }

  get() {
    return this._value;
  }

  toString() {
    return `Wrapper (${this._value})`;
  }
}

const wrap = val => new Wrapper(val);

const db = {
  student1: {
    address: "Some Address"
  }
}

const find = (db, id) => {
  return db[id]
}


const findObject = R.curry((db, id) => Wrapper.of(find(db, id)))

const getAddress = student => Wrapper.of(student.map(R.prop('address')))

const studentAddress = R.compose(getAddress, findObject(db))

console.log(studentAddress('student1').join().get())

module.exports = {
  Wrapper,
  wrap
};
