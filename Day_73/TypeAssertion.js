// * TYPE ASSERTIONS *
// Type assertions in TypeScript are a way to explicitly inform the TypeScript compiler about the 
// expected type of a value, even when the compiler cannot determine it with certainty. 
// They are useful when you, as a developer, have more knowledge about the data types than 
// TypeScript can infer, especially in scenarios where you're working with non-TypeScript code or dynamically retrieved data.
// Here's an explanation of the provided example:
var data = "1000";
// Type assertion to treat "data" as a string
console.log(data.repeat(3));
