//   POLYMORPHISM & METHOD OVERRIDE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// This code example demonstrates the concept of polymorphism and method override in TypeScript, which is commonly used in object-oriented programming.
// It defines abstract classes and concrete subclasses to illustrate these concepts.
// Define an abstract class
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    AbstractEntity.generateNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
// Create a concrete subclass
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Entity;
}(AbstractEntity));
// Create another concrete subclass
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(id, name) {
        return _super.call(this, id, name) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Additional Info: ...");
    };
    return AnotherEntity;
}(AbstractEntity));
// Generate unique IDs for entities using the static method
var entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
var entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
