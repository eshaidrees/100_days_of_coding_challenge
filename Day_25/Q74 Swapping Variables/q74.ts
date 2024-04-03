// This function swaps the values of two variables
let a = 10;
let b = 5;

console.log("Before swapping:");
console.log("a =", a); // Output: 10
console.log("b =", b); // output: 5

// Using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a); // Output: 5
console.log("b =", b); // Output: 10