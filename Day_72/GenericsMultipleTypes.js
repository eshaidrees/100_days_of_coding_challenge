//  GENERICS MULTIPLE TYPES 
// Generics in TypeScript can handle multiple types using union types or intersection types,
// allowing you to create flexible and versatile code that works with a variety of data types. 
// Let's break down these two approaches:
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
console.log(returnTypeEx("Jhon")); // Returns: "Jhon" (string)
// Arrow Function with Generics `returnTypeArrowSyntax`
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax("Jhon")); // Returns: "Jhon" (string)
// Generic Function `testType`
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Jhon"));
// Returns: "The Value Is Jhon And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
console.log(multipleTypes("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Jhon", true));
// Returns: "The First Value Is Jhon And Second Value true"
