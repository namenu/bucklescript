'use strict';


console.log(2);

function a0(x, y) {
  return (x + y | 0) + 1 | 0;
}

console.log(5);

function a1(x, y) {
  return a0(x, y) + 1 | 0;
}

console.log(8);

function a2(x, y) {
  return a1(x, y) + 1 | 0;
}

console.log(11);

function a3(x, y) {
  return a2(x, y) + 1 | 0;
}

console.log(14);

function a4(x, y) {
  return a3(x, y) + 1 | 0;
}

var A4 = /* module */[/* a4 */a4];

var A3 = /* module */[
  /* a3 */a3,
  /* A4 */A4
];

var A2 = /* module */[
  /* a2 */a2,
  /* A3 */A3
];

var A1 = /* module */[
  /* a1 */a1,
  /* A2 */A2
];

var A0 = /* module */[
  /* a0 */a0,
  /* A1 */A1
];

var v1 = a1(1, 2);

var v2 = a2(1, 2);

var v3 = a3(1, 2);

var v4 = a4(1, 2);

var v0 = 4;

exports.A0 = A0;
exports.v0 = v0;
exports.v1 = v1;
exports.v2 = v2;
exports.v3 = v3;
exports.v4 = v4;
/*  Not a pure module */
