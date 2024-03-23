   
let guest: string [] = [`Areeba` , `Sofia` , `Hafsa`];

//    for(let i=0; i<guest.length;i++){
//     console.log(`Dear`+ guest[i] + `,\n you are invited for the dinner tomorrow\n`)
// }

let notcoming : string = `Sofia`;
//new guest
let newguest : string = `Bisma`;

guest[1] = newguest;
// new invitation
for(let i=0; i<guest.length;i++){
    console.log(`Dear`+ guest[i] + `,\n you are invited for the dinner tomorrow\n`)
}

console.log(`${notcoming} is not coming for the dinner tomorrow`);

console.log( ` \nGood News! I have found a bigger dinner table so i invite 3 more guest\n`)

guest.unshift( `Sir Zia Khan`)
guest.splice(2 ,0 ,`Kamran Tessori`)
guest.push(`Danial Nagori`) 

for(let i=0; i<guest.length;i++){
    console.log(`Dear`+ guest[i] + `,\n you are invited for the dinner tomorrow\n`)
}



