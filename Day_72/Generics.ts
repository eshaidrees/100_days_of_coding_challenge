//  GENERICS

// Generics in TypeScript are a feature that allows you to write reusable code by passing a type as 
// a parameter to another type, whether it's a class, interface, or function. This means that you 
// don't always have to specify the type explicitly when writing code, as you can use Generics  
// to work flexibly with various types without resorting to using ": any."

// A generic function that returns the input value as is
function returnType<T>(val:T):T {
    return val;
}

const numValue: number = returnType<number>(100);
const strValue: string = returnType<string>("Hello");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);

