//create a list of mixeditems
let mixedItems = ["apple", 123 , true , "banana" , 456 , false , "orange"];

//pick out only string
let onlyStrings = mixedItems.filter(item => typeof item === 'string');

// Display the result
console.log("Only Strings:", onlyStrings);