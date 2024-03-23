var userprofile = (function () {
    // User details are inside
    var name = "Sara";
    var age = 16;
    //This part shares user details
    return {
        userInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Show user name and age
userprofile.userInfo();
