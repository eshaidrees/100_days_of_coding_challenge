
// Define a function that creates a closure to add a constant number to another number
function makeadder(add:number):(input:number) => number {

 // Return a function that adds the constant number to the input number
    return function (number:number): number {
        return number + add  // Add the constant number to the input number
    }
}
// Create a function that add 5 to a number 
let addfive = makeadder(5)

// Log the result of adding 5 to a number
console.log(addfive(10));


