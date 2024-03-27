
// Creating a type alias that represents either a circle or a rectangle
type Shapes = {

    kind: "Circle" | "Rectangle"

    radius?: number  //for circle

    width?: number  // for rectangle

    length?: number  //for rectangle
}

// Describe a circle using our shapes type
let Circle: Shapes = {

    kind: "Circle",
    radius : 5
}

// Describe a rectangle using our shapes type
let Rectangle: Shapes = {

    kind: "Rectangle",
    width: 10,
    length: 30
}

console.log(Circle);  // circle

console.log(Rectangle);  // rectangle
