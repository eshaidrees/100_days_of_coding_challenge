//  GENERICS MULTIPLE TYPES 

// Generics in TypeScript can handle multiple types using union types or intersection types,
// allowing you to create flexible and versatile code that works with a variety of data types. 
// Let's break down these two approaches:

// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
    return val;
}
  
console.log(returnTypeEx<number>(100)); // Returns: 100 (number)
console.log(returnTypeEx<string>("Jhon")); // Returns: "Jhon" (string)
  

// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val: T): T => val;
  
console.log(returnTypeArrowSyntax<number>(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax<string>("Jhon")); // Returns: "Jhon" (string)

  
// Generic Function `testType`
function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`
}
  
console.log(testType<number>(100));
// Returns: "The Value Is 100 And Type Is number"
  
console.log(testType<string>("Jhon"));
// Returns: "The Value Is Jhon And Type Is string"
  

// Generic Function `multipleTypes`
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
  
console.log(multipleTypes<string, number>("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"
  
console.log(multipleTypes<string, boolean>("Jhon", true));
// Returns: "The First Value Is Jhon And Second Value true"