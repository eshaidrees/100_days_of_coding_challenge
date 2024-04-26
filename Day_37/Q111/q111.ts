function ageGroups(age:number):string{
    if(age < 13){
        return 'Child';
    }else if(age <= 20){
        return 'Teenager';
    }else{
        return 'Adult'
    }

}
console.log(ageGroups(12)); // Output: 'Child'
console.log(ageGroups(16)); // Output: 'Teenager'
console.log(ageGroups(25)); // Output: 'Adult'