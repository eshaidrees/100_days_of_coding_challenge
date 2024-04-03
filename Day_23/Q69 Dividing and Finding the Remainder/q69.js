function divideAndFindRemainder(dividend, divisor) {
    // Calculate the quotient
    var quotient = Math.floor(dividend / divisor);
    // Calculate the remainder
    var remainder = dividend % divisor;
    // Create and return an object containing both the quotient and remainder
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndFindRemainder(10, 3)); // Show { quotient: 3, remainder: 1 }
