"use strict";
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use .filter() with a callback function to filter out numbers greater than 5
const filter_number = numbers.filter((number) => number > 5);
console.log(filter_number); // Output: [ 6, 7, 8, 9, 10 ]
