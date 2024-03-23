function make_sandwich(...items:string[]){
    console.log(`Making a sandwich with:`);

items.forEach(element => console.log("- " + element))

    console.log('Enjoy your sandwich\n')
}

make_sandwich('Chiken','Cheese');
make_sandwich('lettuce','tomato','onion');
make_sandwich('avocado','sprouts','mayo','musturd');