"use strict";
function filterNumber(num) {
    return num.filter(number => number > 10);
}
let numbers = [5, 9, 12, 20, 30, 40];
console.log(filterNumber(numbers));
