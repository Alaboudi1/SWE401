const assert = require('assert');

const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;




// test these functions

assert(add(10, 20) === 30);
assert(sub(10, 20) === -10);
assert(mul(10, 20) === 200);
assert(div(10, 20) === 0.5);

console.log('All tests passed!');

