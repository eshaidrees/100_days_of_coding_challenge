// Generates a random integer between 1 and 10
function getRandomInt(): number{ 
    
    return Math.floor(Math.random() * 10)+ 1
}

let randomNumber = getRandomInt();
console.log(randomNumber); // Output will be a random integer between 1 and 10
