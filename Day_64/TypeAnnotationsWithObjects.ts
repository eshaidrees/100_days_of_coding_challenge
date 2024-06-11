// Type Annotations With Objects
// Type annotations with objects in TypeScript allow you to specify the types of properties that an object should have.

let person : {
    name: string;
    age:number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
}

person = {
    name : "Alice",
    age: 30,
    jobTitle: "Engineer",  // if i comment this line so person doesn't show error because its optional ?
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
}

  
// And there is yet another method
let personTwo: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",   // if i comment this line so personTwo doesn't show error because its optional ?
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };