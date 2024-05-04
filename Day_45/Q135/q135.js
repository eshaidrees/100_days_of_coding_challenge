"use strict";
// Define JavaScript object
const person = {
    name: 'Elsa',
    age: 25,
    hobbies: ['reading', 'traveling', 'cooking']
};
// Convert the JavaScript object into a formatted JSON string with proper indentation
const formattedJsonString = JSON.stringify(person, null, 2);
console.log(formattedJsonString);
