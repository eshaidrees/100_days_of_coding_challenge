// Traditional function expression
const traditionaladd = function(a:number, b:number) {
    return a + b;
  };
  
  // Converted to an arrow function
const arrowadd = (a:number, b:number) => a + b;
// Testing the arrow function
console.log(traditionaladd(2, 3)); // Output: 5
console.log(arrowadd(2, 3)); // Output: 5