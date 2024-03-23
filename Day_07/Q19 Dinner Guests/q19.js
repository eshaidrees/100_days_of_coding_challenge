//Question 17: Shirinking Guest
var guest = ["Areeba", "Sofia", "Hafsa"];
//console.log( ` \nGood News! I have found a bigger dinner table so i invite 3 more guest.\n`)
guest.unshift("Sir Zia Khan");
guest.splice(2, 0, "Kamran Tessori");
guest.push("Danial Nagori");
//for(let i=0; i<guest.length;i++){
//    console.log(`Dear`+ guest[i] + `,\n you are invited for the dinner tomorrow.\n`)
//}
//console.log(`\nUnfortunately we can not arrange a bigger dinner table ,only two people are invited.\n`)
while (guest.length > 2) {
    var remove_guest = guest.pop();
    // console.log(`Sorry Dear ${remove_guest} you are not invited for the dinner.`)
}
// for(let i=0; i<guest.length; i++){
//     console.log(`\nDear` + guest[i]  +` you are still invited for the dinner tomorrow.\nThank You\n`)
// }
guest.splice(0, 2);
console.log(guest);
//Question 19: Dinner Guest
console.log("I invited ".concat(guest.length, " people to dinner."));
