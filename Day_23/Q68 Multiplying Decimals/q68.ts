function multiplyDecimals(num1: number , num2: number):number{
     
    // Multiply the two decimal number
    const product = num1 * num2
     
    //Round the product of two decimal number
    const roundedProduct: number = Math.round(product * 100) / 100;

    return roundedProduct;
}
console.log(multiplyDecimals(2.75, 1.5)); // Output: 4.13
