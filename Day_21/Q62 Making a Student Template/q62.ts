
// Define an interface for student information
interface student_information{
    name:string,
    age:number,
    class:number
};

// Create a student object with name, age, and class
let Student: student_information = {
    name: "sara", // Student's name
    age: 15,  // Student's age
    class: 8  // Student's class
};

// Log the 'Student' object to the console
console.log(Student);