//calculating the area of a rectangle
function calculateArea( width: number, height: number):number {
    return width * height
}

// Refactored into an arrow function
let calculateAreaArrow = ( width: number, height: number):number => width * height

console.log(calculateAreaArrow ( 4,8));