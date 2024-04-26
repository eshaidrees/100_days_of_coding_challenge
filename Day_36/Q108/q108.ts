function compareIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareIgnoreCase("Hello", "hello")); // Output: true
console.log(compareIgnoreCase("JavaScript", "Python")); // Output: false