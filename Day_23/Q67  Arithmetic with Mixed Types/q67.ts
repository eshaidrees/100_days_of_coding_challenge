// This function adds a number and a string 
function  add_number_and_string (number:number, numberwithstring:string):number{
//  convert string to a number and add with firstnumber
    return number + Number(numberwithstring);

};

console.log(add_number_and_string(10 , "5")) // Shows 15