// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("Failure"));
    }
  });
  
  conditionalPromise
    .then((result) => console.log("Promise resolved:",result)) // Handles a successful resolution
    .catch((error) => console.log("Promise rejected:",error.message)); // Handles a rejection