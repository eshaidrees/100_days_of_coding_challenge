var magicians = [' Alice ', ' David ', ' Chris '];
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] = ' the Great ' + magicians[i]);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice());
console.log("\n Original Magicians:");
show_magicians(magicians);
console.log("\n Great Magicians:");
show_magicians(greatMagicians);
