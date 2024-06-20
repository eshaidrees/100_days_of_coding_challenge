// Interface Method And Parameters
// Create an object that adheres to the 'Person' interface
var alice = {
    name: "alice",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
alice.greet("Hello, TypeScript!"); // Output: alice says: Hello, TypeScript!
//   In this example:
// Interface Declaration: We define an interface named PersonEx2 with three members:
// name: A property of type string.
// age: A property of type number.
// greet: A method that takes a parameter of type string and returns void (indicating that it doesn't return any value).
// Object Creation: We create an object alice that adheres to the PersonEx2 interface. It has properties name and age, as well as a greet method that takes a message and logs it to the console.
// Method Invocation: We call the greet method on the alice object, passing in a message. The method uses the object's properties to construct a greeting message and logs it to the console.
