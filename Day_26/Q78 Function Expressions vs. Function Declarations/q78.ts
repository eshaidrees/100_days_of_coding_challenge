// Function declaration to square a number
function squareNumberDeclaration(number: number ):number{
    return number * number
};

// Function expressions  to square a number
const squareNumberExpressions = function(number: number){
    return number * number
};

console.log(squareNumberDeclaration(5)); // 25
console.log(squareNumberExpressions(5)); // 25