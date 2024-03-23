var current_users = ['babar', 'ayeza', 'alina', 'aina', 'taha'];
var new_users = ['aiman', 'babar', 'dua', 'aina', 'ahad'];
new_users.forEach(function (newUsername) {
    var lowerCase = newUsername.toLowerCase();
    if (current_users.map(function (curr_user) { return curr_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(newUsername, " is not available.enter the new username"));
    }
    else {
        console.log("The username ".concat(newUsername, " is available."));
    }
});
