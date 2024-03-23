let current_users: string [] = ['babar','ayeza','alina','aina','taha'];

let new_users: string [] = ['aiman','babar','dua','aina','ahad'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();
    if(current_users.map(curr_user => curr_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available.enter the new username`);
    }
    else{
        console.log(`The username ${newUsername} is available.`);
    }
})
