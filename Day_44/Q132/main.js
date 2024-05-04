"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module1_1 = __importDefault(require("./module1"));
console.log((0, module1_1.default)("Eric")); // Output: Hello, Eric!
const module2_1 = require("./module2");
console.log((0, module2_1.person1)("Alice")); // Output: Hello, Alice!
console.log((0, module2_1.person1)("Bob")); // Output: Hello, Bob!
