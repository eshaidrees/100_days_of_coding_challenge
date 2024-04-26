function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1)  // January 1st of next year

    const diff = newYear.getTime() - today.getTime() // Difference in millisecond

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));  // Convert to days
    
    return days
}

console.log(daysUntilNewYear() + " days until newYear.")

