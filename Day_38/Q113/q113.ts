// Function to check if the map contains a key for "Canada" and log its capital if it exists
function checkCanada(map: Map<string, string>) {
    // Check if the map contains the key "Canada"
    if (map.has("Canada")) {
        // If "Canada" is found, log its capital
        console.log("The capital of Canada is: " + map.get("Canada"));
    } else {
        // If "Canada" is not found, log a message indicating so
        console.log("Canada is not found in the map.");
    }
}

// Create a Map with country-capital pairs
let countryCapitals: Map<string, string> = new Map([
    ["USA", "Washington D.C."],
    ["Canada", "Ottawa"],
    ["UK", "London"]
]);

// Call the checkCanada function with the countryCapitals Map
checkCanada(countryCapitals);
