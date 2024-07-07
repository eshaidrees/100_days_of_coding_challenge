//   CLASS STATIC MEMBERS 
// Static members in a class are properties or methods that belong to the class itself, rather than to instances of the class.
// This means you can access them without creating an instance of the class. 
//They are defined using the static keyword in TypeScript. In this case, the static member nextId is used to manage unique IDs for all instances of the ProductStaticMembers class.
var ProductStaticMembers = /** @class */ (function () {
    function ProductStaticMembers(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductStaticMembers.generateNextId = function () {
        return ProductStaticMembers.nextId++;
    };
    ProductStaticMembers.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' property
    ProductStaticMembers.nextId = 1;
    return ProductStaticMembers;
}());
// Generate unique IDs for products using the static method
var product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
var product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
