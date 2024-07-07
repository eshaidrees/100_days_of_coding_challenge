// CLASS ACCESS MODIFIERS
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
// In TypeScript, class access modifiers are keywords used to control the visibility and accessibility of class members (properties and methods) from outside the class. There are three main access modifiers:
// public: Members declared as public are accessible from anywhere, both within and outside the class. This is the default modifier if you don't explicitly specify one.
var MyClassPublic = /** @class */ (function () {
    function MyClassPublic(name) {
        this.name = name;
    }
    return MyClassPublic;
}());
var instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
// private: Members declared as private are only accessible from within the class they are defined in. You cannot access private members from outside the class.
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secret = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secret); // Accessing the private property from within the class
    };
    return MyClassPrivate;
}());
var instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property
// protected: Members declared as protected are accessible from within the class they are defined in and from subclasses (derived classes). You cannot access protected members from outside the class or unrelated classes.
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.familyName = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.introduceFamily = function () {
        console.log("Our family name is ".concat(this.familyName));
    };
    return Child;
}(Parent));
var parentEx = new Parent("Smith");
var childEx = new Child("Johnson");
// console.log(parentEx.familyName); // This would result in an error because familyName is protected
childEx.introduceFamily(); // This is a valid way to access the protected property
// These access modifiers help you encapsulate the internal details of a class and provide a level of control over how class members are accessed and manipulated. They are essential for maintaining the integrity and security of your code in larger applications.
