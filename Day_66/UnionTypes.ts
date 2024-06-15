// Union Types
// Annotating a variable with union types means specifying that the variable can hold values of multiple types. 
// Union types in TypeScript are denoted using the | symbol between the types.

let myVar : string | number | boolean

myVar = 123
console.log(myVar);

myVar = "Hello"
console.log(myVar);

myVar = true
console.log(myVar);

