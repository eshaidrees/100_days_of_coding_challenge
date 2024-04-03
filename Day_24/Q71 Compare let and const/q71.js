var x = 5;
console.log(x); // Output: 5
// Reassigning the value of x using let
x = 10;
console.log(x); // Output: 10
var y = 5;
console.log(y); // Output: 5
// Attempting to reassign a const-declared variable
try {
    y = 10; // This will throw a compilation error
}
catch (error) {
    console.error(error); // This won't execute, as the error is caught during compilation
}
