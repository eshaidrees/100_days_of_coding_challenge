// CLASS ACCESS MODIFIERS

// In TypeScript, class access modifiers are keywords used to control the visibility and accessibility of class members (properties and methods) from outside the class. There are three main access modifiers:

// public: Members declared as public are accessible from anywhere, both within and outside the class. This is the default modifier if you don't explicitly specify one.

class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property

// private: Members declared as private are only accessible from within the class they are defined in. You cannot access private members from outside the class.

class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}

const instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property

// protected: Members declared as protected are accessible from within the class they are defined in and from subclasses (derived classes). You cannot access protected members from outside the class or unrelated classes.

class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

// console.log(parentEx.familyName); // This would result in an error because familyName is protected
 childEx.introduceFamily(); // This is a valid way to access the protected property
// These access modifiers help you encapsulate the internal details of a class and provide a level of control over how class members are accessed and manipulated. They are essential for maintaining the integrity and security of your code in larger applications.