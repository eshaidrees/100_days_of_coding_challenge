function isDivisibleBy2And3(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
}

console.log(isDivisibleBy2And3(6)); // Output: true (6 is divisible by both 2 and 3)
console.log(isDivisibleBy2And3(9)); // Output: false (9 is not divisible by 2)
