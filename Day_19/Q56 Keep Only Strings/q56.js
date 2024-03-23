//create a list of mixeditems
var mixedItems = ["apple", 123, true, "banana", 456, false, "orange"];
//pick out only string
var onlyStrings = mixedItems.filter(function (item) { return typeof item === 'string'; });
// Display the result
console.log("Only Strings:", onlyStrings);
