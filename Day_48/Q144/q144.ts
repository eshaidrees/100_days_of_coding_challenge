const promise1 = Promise.resolve("apple"); // Resolves immediately with the value "apple"
const promise2 = "banana"; // Non-Promise value
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 6000, "orange"); // Resolves after a delay of 2 seconds with the value "orange"
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: ["apple", "banana", "orange"]
});

