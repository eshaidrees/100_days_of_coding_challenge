"use strict";
// Array of numbers
const numbers = [10, 20, 30, 40, 50];
// Using reduce to calculate the sum
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Output the sum
console.log(sum);
