"use strict";

// const obj = { a: 1, b: 2, c: 3 };
// iterate(obj, (key, value) => {
//   console.log({ key, value });
// });

const iterate = (obj, callback) => {
  for (const key in obj) {
    const value = obj[key];
    callback(key, value, obj);
  }
  return obj;
};

module.exports = { iterate };
