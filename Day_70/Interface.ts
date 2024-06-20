// In TypeScript, an interface is a powerful way to define the structure of an object. It provides a way to define the shape of an object by specifying the types of its properties. Interfaces can also be used to define the structure of functions, classes, and arrays.

interface Person1 {
    name:string;
    age: number;
}

let person2 : Person1 = {
    name:"Jhon",
    age: 30,
};

// In this example, we define an interface Person1 with two properties: name (a string) and age (a number). We then create an object person2 that adheres to this interface.

// Interfaces are widely used in TypeScript for:

//- Defining the structure of data objects.
//- Specifying the shape of function parameters and return values.
//- Enforcing consistency in class definitions.
//- Facilitating code maintainability and collaboration.

