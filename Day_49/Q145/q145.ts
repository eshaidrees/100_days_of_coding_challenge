// Define a function that accepts a callback and two numbers
function executeCallback(
    callback: (arg1:number , arg2:number) => void,
    arg1:number,
    arg2:number
): void {
     // Invoke the callback with the specified arguments
    callback(arg1,arg2)
}

  // Example callback function that adds two numbers
  const add = (a:number,b:number) => {
  console.log(a + b); // Outputs the sum of a and b
}

// Call executeCallback with the add function and two numbers
executeCallback(add,2,4);  // output:6