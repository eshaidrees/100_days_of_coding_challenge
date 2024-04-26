"use strict";
let words = ["Apple", "Mango", "Banana", "Orange"];
// Uses .map() to create a new array with the length of each word
let lengths = words.map(word => word.length);
console.log(lengths); // Outputs: [5,5,6,6] 
