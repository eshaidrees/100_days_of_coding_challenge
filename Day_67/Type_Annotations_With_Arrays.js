// Type Annotations With Arrays
//Type annotations with arrays allow you to specify the expected data types of the array elements, ensuring type safety in your code.
var colours = ["red", "yellow", "blue", "green"];
for (var i = 0; i < colours.length; i++) {
    console.log("Colour: ".concat(colours[i].toUpperCase()));
}
