const str = "Typescript";
let vowelFound = false;

// Iterate through each character in the string
for (let i = 0; i < str.length; i++) {
    const char = str[i];     // Get the current character
    console.log(char);

    // Check if the current character is a vowel
  if ("aeiou".includes(char.toLowerCase())) {
      // If a vowel is found, log a message and set vowelFound to true
    console.log("Vowel found. Stopping iteration.");
    vowelFound = true;
    // Exit the loop
     break;
  }
}

// After the loop, check if a vowel was found
if (!vowelFound) {
  console.log("No vowel found in the string.");
}
