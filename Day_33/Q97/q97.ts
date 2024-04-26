function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0'); // Ensure two digits
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(currentDate.getFullYear());

    return `${day}-${month}-${year}`;
}

console.log(getCurrentDate()); // Output: "11-04-2024" 