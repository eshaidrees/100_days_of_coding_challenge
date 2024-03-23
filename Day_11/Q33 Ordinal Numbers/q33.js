var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(function (number) {
    var ordinalEnding = "th";
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    console.log("".concat(number).concat(ordinalEnding));
});
