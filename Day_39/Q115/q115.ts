function logDayOfWeek(dayNumber:number):void{
    let day:string;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break
        case 2:
            day = "Monday";   
            break;
            case 3:
                day = "Tuesday";
                break;
            case 4:
                day = "Wednesday";
                break;
            case 5:
                day = "Thursday";
                break;
            case 6:
                day = "Friday";
                break;
            case 7:
                day = "Saturday";
                break;
            default:
                day = "Invalid day";
                break;
        }
        console.log(`Day ${dayNumber} is ${day}`);
    }
    
    logDayOfWeek(6); // Output: Day 6 is Friday
    

