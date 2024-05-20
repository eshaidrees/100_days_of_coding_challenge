"use strict";
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World!");
    }, 2000); // Resolving after 2 seconds
});
myPromise.then((result) => {
    console.log(result); // Output: Hello, World!
});
