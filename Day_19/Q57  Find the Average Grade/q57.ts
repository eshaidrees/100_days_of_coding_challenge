
// Create a List of Grades
let grades: number[] = [85, 90, 75, 88, 92];

//Calculate the Sum of Grades
let sum: number = 0;
for (let grade of grades) {
    sum += grade;
}

// Calculate the Average Grade
let averageGrade: number = sum / grades.length;

console.log("Average Grade:", averageGrade)