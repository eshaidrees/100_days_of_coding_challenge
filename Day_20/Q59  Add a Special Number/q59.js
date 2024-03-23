// Define a function that creates a closure to add a constant number to another number
function makeadder(add) {
    // Return a function that adds the constant number to the input number
    return function (number) {
        return number + add; // Add the constant number to the input number
    };
}
// Create a function that add 5 to a number 
var addfive = makeadder(5);
// Log the result of adding 5 to a number
console.log(addfive(10));
