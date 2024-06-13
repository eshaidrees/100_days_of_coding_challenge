// Type Annotation With Function

// Type annotations in TypeScript are used to explicitly specify the data types for function parameters and return values.
// Type annotations for functions are typically added using colons (:) within the function's parameter list and after the parameter list to denote the return type.
// Here's a simple example illustrating type annotations with functions:

// Function to calculate the area of a rectangle
function calculateRectangleArea(long:number , width:number): number {
    return long * width;
}
// Calling the function with valid arguments
const long = 5
const width = 3

const area = calculateRectangleArea(long,width);
console.log(`The area of the rectangle is:${area}`);

