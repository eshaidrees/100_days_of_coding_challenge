// Class Type Annotations
// In TypeScript, class type annotations are used to specify the types of properties, methods, and constructor parameters within a class.
// They define the expected data types and enable TypeScript to perform type checking to ensure that class instances adhere to the defined structure. 
// Class type annotations help catch type-related errors at compile time, improving code reliability.
var Product = /** @class */ (function () {
    // Constructor parameter type annotations
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
// Create an instance of the Product class
var product1 = new Product(1, "Widget", 20.0);
// Access class properties and call a method
console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
