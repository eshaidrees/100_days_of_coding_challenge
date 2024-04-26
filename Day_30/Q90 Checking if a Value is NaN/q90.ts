function ValueisNaN(value: any): boolean {
    return isNaN(value); // Checking  if the value is NaN
}

console.log(ValueisNaN(2323)); // Output:false
console.log(ValueisNaN("Hello")); // Output:true
