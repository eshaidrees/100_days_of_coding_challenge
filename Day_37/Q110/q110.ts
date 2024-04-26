function studentGrade(score:number):string{

    if(score >= 90){
        return 'A'
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(studentGrade(85)); // 'B'
console.log(studentGrade(95)); // 'A'
console.log(studentGrade(75)); // 'C'
console.log(studentGrade(45)); // 'F'