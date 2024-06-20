// Type Annotations With Arrays
//Type annotations with arrays allow you to specify the expected data types of the array elements, ensuring type safety in your code.

let colours: string[] = ["red" , "yellow" , "blue" ,"green"];

for (let i = 0; i < colours.length; i++){
    console.log(`Colour: ${colours[i].toUpperCase()}`);
    
}

// 1.We annotate the colours array as an array of strings.
// 2. We use a for loop to iterate over the colours array and display each colours in uppercase letters.
