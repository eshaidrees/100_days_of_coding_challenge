
let  words: string[] = ["Apple", "Mango", "Banana", "Orange"];
// Uses .map() to create a new array with the length of each word
let lengths: number[] = words.map(word => word.length);

console.log(lengths); // Outputs: [5,5,6,6] 