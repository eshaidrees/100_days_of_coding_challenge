// Optional And Default Parameter
// 1.Optional Parameters:
// An optional parameter is one that may or may not be provided when calling a function.
// To define an optional parameter, you use a ? symbol after the parameter name in the function's parameter list.
// The TypeScript compiler allows you to call the function with or without providing a value for the optional parameter.
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// 2.Default Parameters:
// A default parameter is a parameter that automatically takes a default value if no argument is provided during the function call.
// To set a default value for a parameter, you use the = operator in the parameter list.
function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// In the examples above, the age parameter is optional in the first case, and it defaults to 25 in the second case if not provided.
