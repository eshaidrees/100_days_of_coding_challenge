function getnextBirthday(month :number , day :number): Date {
    
    const today = new Date();
    const year =  today.getFullYear();
    const birthday = new Date(year, month - 1, day)
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

const nextBirthday = getnextBirthday(7,8);
console.log("Next birthday on:", nextBirthday.toLocaleDateString())