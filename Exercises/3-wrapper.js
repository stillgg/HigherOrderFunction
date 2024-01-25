"use strict";

// const concat = (s1, s2) => s1 + s2;
// const concatStrings = contract(concat, String, String, String);
// const res = concatStrings("Hello ", "world!");
// console.dir(res); // Output: Hello world!

const contract =
  (fn, ...types) =>
  (...args) => {
    for (let i = 0; i < types.length - 1; i++) {
      const type = types[i];
      const arg = args[i];

      const expectedType = type.name.toLowerCase();
      const argType = typeof arg;

      if (expectedType !== argType) {
        throw new Error("invalid type");
      }
    }

    const res = fn(...args);
    const returnedType = typeof res;
    const expectedType = types[types.length - 1].name.toLowerCase();

    if (returnedType !== expectedType) throw new Error(`invalid returned type`);

    return res;
  };

// const add = (a, b) => a + b;
// const addNumbers = contract(add, Number, Number, Number);
// const res = addNumbers(2, 3);
// console.dir(res); // Output: 5

module.exports = { contract };
