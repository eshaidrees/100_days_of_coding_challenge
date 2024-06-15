// Literal Types
// Literal types are a type system feature in TypeScript that allow you to specify exactly which 
// values are allowed for a particular variable or function parameter. Instead of using a general type like string or number, you can specify a literal type that can only take on a specific value.

// For example, you can define a literal type like this:
let direction: "left" | "right" | "up" | "down";
// In this case, the direction variable can only be assigned one of the four literal string values: "left", "right", "up", or "down". Any other value would result in a type error.

//Here's an example of using a literal type in a function parameter:
function setColor(color: "red" | "green" | "blue") {

    console.log(`My Favorite colour is: ${color}`);  // Output:My Favorite colour is: blue
    
}
 //setColor("Yellow")   // error: Argument of type '"Yellow"' is not assignable to parameter of type '"red" | "green" | "blue"'.
 setColor("blue") 

//n this case, the color parameter can only be one of the three specified string literals: "red", "green", or "blue". Any other value would result in a type error.This helps prevent potential bugs by restricting the input to a predefined set of values.