// Function Rest Parameter
// In TypeScript, as well as in JavaScript, a rest parameter allows a function to accept an indefinite number of arguments as an array. This means that you can pass any number of arguments to the function, and they will be collected into an array, which can be accessed within the function. Rest parameters are specified using the spread operator ... followed by the parameter name in the function's parameter list.
// Function with a rest parameter and type annotations
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 40)); // Output: 100
