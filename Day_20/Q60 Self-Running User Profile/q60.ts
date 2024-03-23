
let userprofile = (function(){
    // User details are inside
    let name = "Sara";
    let age = 16

    //This part shares user details
    return{
        userInfo: function() {

            console.log(`Name: ${name}, Age: ${age}`);

        }
    } 

})();
// Show user name and age
userprofile.userInfo()