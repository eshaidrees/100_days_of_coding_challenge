// Create a List of Grades
var grades = [85, 90, 75, 88, 92];
//Calculate the Sum of Grades
var sum = 0;
for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
    var grade = grades_1[_i];
    sum += grade;
}
// Calculate the Average Grade
var averageGrade = sum / grades.length;
// Display the Result
console.log("Average Grade:", averageGrade);
