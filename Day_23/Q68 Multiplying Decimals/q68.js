function multiplyDecimals(num1, num2) {
    // Multiply the two decimal number
    var product = num1 * num2;
    //Round the product of two decimal number
    var roundedProduct = Math.round(product * 100) / 100;
    return roundedProduct;
}
console.log(multiplyDecimals(2.75, 1.5)); // Output: 4.13
