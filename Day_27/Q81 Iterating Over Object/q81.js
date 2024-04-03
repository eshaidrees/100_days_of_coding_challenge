"use strict";
function logObjectProperties(obj) {
    // Iterate over the properties of the object
    for (let property in obj) {
        // Log the property and its value
        console.log(`${property}: ${obj[property]}`);
    }
}
// Example usage:
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "red"
};
// Call the function with the car object
logObjectProperties(car);
