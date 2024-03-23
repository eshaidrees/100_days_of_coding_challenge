let magicians: string [] = [' Alice ', ' David ',' Chris '];

function make_great(magicianArray: string[] ){
    for(let i=0; i<magicianArray.length; i++){
        magicians[i] = ' the Great ' + magicians[i] 
    }

}

function show_magicians(magicians: string[] ){
    magicians.forEach(magician => {
        console.log(magician);
    });
}

make_great(magicians);
show_magicians(magicians);