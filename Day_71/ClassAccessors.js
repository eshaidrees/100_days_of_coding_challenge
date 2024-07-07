//  CLASS ACCESSORS
// Class accessors, also known as getters and setters, are a way to control access to the properties of a class. 
// They allow you to get and set the values of class properties while providing additional control and logic if needed. Accessors are defined using the get and set keywords.
var ProductExAccessors = /** @class */ (function () {
    function ProductExAccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0; // Default price
    }
    Object.defineProperty(ProductExAccessors.prototype, "price", {
        // 'public' getter for price
        get: function () {
            return this._price;
        },
        // 'public' setter for price
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductExAccessors.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this._price);
    };
    return ProductExAccessors;
}());
// Create an instance of the ProductExAccessors class
var productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
// Use the 'setter' to update the price
productEx.price = 20.0;
console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.
