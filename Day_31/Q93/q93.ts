function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

const fruits: string[] = ["Apple", "Banana", "Cherry"];

replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
