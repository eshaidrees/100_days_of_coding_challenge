function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with:");
    items.forEach(function (element) { return console.log("- " + element); });
    console.log('Enjoy your sandwich\n');
}
make_sandwich('Chiken', 'Cheese');
make_sandwich('lettuce', 'tomato', 'onion');
make_sandwich('avocado', 'sprouts', 'mayo', 'musturd');
