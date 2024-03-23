// calculate all average score
function averageScore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    // Add all the score and Divide by the number of score
    var total = score.reduce(function (sum, score) { return sum + score; }, 0);
    return total / score.length;
}
// Shoow the average Score
console.log(averageScore(90, 65, 80, 50));
