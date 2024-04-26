function removeElement<T>(arr:T[]): T | undefined{

    return arr.pop()

}

let number: number [] =  [1,2,3,4,5,6];

console.log(removeElement(number)) // Output: 6
console.log(number)  // Output: [1,2,3,4,5]

