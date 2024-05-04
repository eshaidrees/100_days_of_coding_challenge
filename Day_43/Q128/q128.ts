// Arrow function that takes multiple parameters and returns the product of all parameters:
const multiParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
  
  console.log(multiParameters(2, 3, 4)); // Outputs: 24