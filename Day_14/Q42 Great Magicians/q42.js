var magicians = [' Alice ', ' David ', ' Chris '];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicians[i] = ' the Great ' + magicians[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
make_great(magicians);
show_magicians(magicians);
