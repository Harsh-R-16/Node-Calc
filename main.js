let add = require("./add");
let sub = require("./sub");
let mul = require("./mul");
let div = require("./div");
// Using require instead of Import Export
// require will not work in react, import will work
console.log(add(10, 15));
console.log(sub(10, 15));
console.log(mul(10, 15));
console.log(div(10, 15));

console.log(add(100, 5));
console.log(sub(100, 5));
console.log(mul(100, 5));
console.log(div(100, 5));
