//   GENERICS CLASSES 
// Generics in classes allow you to create flexible and reusable class structures that can work
// with a variety of data types, enhancing code flexibility and type safety.
// In this example, we'll explore generics in classes using the User class as an example:
// Generic Class `User`
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
// Creating an instance of `User` with a specific type parameter (string)
var userOne = new User("Alice");
console.log(userOne.value); // Outputs: "Alice"
userOne.show("Message"); // Outputs: "Message - Alice"
// Creating an instance of `User` with a type parameter that can be a number or a string
var userTwo = new User(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("Message"); // Outputs: "Message - 100"
