function filterNumber(num:number []): number [] {
    return num.filter(number => number > 10)
}

let numbers :number [] = [5,9,12,20,30,40];
console.log(filterNumber(numbers));