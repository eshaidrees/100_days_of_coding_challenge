let usernames: string [] = ['admin','ayeza','alina','aina','taha'];

usernames.forEach(usernames => {

    if(usernames == 'admin'){

        console.log(' Hello admin, would you like to see a status report?')

    }
    else{

        console.log(`Hello ${usernames}, thank you for logging in again. `)
        
    }

})


