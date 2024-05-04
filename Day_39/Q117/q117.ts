function evaluateExpression(value:number): string {
    let result:string;
    switch (value){
        case 1:
            result = "One";
            break
        case 2:
            result = "Two";
            break
        case 3:
            result = "Three";
            break
        default:
            result = "Not one, two, or three";
    }
    return result

}
console.log(evaluateExpression(1));   // Output: One
console.log(evaluateExpression(2));   // Output: Two
console.log(evaluateExpression(3));   // Output: Three
console.log(evaluateExpression(4));   // Output: Not one, two, or three