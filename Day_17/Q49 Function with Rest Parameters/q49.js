function Hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hooby) {
        console.log("I enjoy ".concat(hooby, "."));
    });
}
Hobbies('Reading', 'Cooking', 'Travelling');
