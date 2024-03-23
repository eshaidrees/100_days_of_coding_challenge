let guest: string [] = [`Areeba` , `Sofia` , `Hafsa`];
 
for(let i=0; i<guest.length;i++){
    console.log(`Dear`+ guest[i] + `,\n you are invited for the dinner tomorrow\n`)
}

let notcoming : string = `Sofia`;
//new guest
let newguest : string = `Bisma`;

guest[1] = newguest;
// new invitation
for(let i=0; i<guest.length;i++){
    console.log(`Dear`+ guest[i] + `,\n you are invited for the dinner tomorrow\n`)
}

console.log(`${notcoming} is not coming for the dinner tomorrow`)