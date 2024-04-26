// Define a Map with student IDs and names
let studentMap: Map<number, string> = new Map([
    [1001, "Alina"],
    [1002, "Danial"],
    [1003, "Maham"]
]);

// Iterate over the Map using a for-of loop
for (let [id, name] of studentMap) {
    // Log each student ID and name pair to the console
    console.log(`Student ID: ${id}, Name: ${name}`);
}
