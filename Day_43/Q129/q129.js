"use strict";
const obj = {
    name: 'John',
    traditionalMethod: function () {
        console.log(this.name); // 'this' refers to the object 'obj'
    },
    arrowMethod: () => {
        console.log(this.name); // Error: 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    }
};
obj.traditionalMethod(); // Output: John
obj.arrowMethod(); // TypeScript Error
