"use strict";
// Traditional function expression
const traditionaladd = function (a, b) {
    return a + b;
};
// Converted to an arrow function
const arrowadd = (a, b) => a + b;
// Testing the arrow function
console.log(traditionaladd(2, 3)); // Output: 5
console.log(arrowadd(2, 3)); // Output: 5
