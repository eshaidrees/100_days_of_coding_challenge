let magicians: string [] = [' Alice ', ' David ',' Chris '];

function make_great(magicians: string[] ): string [] {
    let greatMagicians = [];
    for(let i=0; i<magicians.length; i++){
       greatMagicians.push (magicians[i] = ' the Great ' + magicians[i] )
    }
    return greatMagicians;
}

function show_magicians(magicians: string[] ){
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let greatMagicians = 
make_great(magicians.slice());

console.log("\n Original Magicians:");
show_magicians(magicians);

console.log("\n Great Magicians:");
show_magicians(greatMagicians);




