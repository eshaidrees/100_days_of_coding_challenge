
function divideAndFindRemainder(dividend: number, divisor: number): { quotient: number, remainder: number } {

    // Calculate the quotient
    const quotient: number = Math.floor(dividend / divisor);
    
    // Calculate the remainder
    const remainder: number = dividend % divisor;
    
    // Create and return an object containing both the quotient and remainder
    return { quotient, remainder };

}

console.log(divideAndFindRemainder(10,3))  // Show { quotient: 3, remainder: 1 }
