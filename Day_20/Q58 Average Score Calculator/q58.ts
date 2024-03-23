// calculate all average score
function averageScore (...score: number[]):number {

// Add all the score and Divide by the number of score
    let total = score.reduce((sum,score) => sum + score,0);

    return total/score.length;
}
// Shoow the average Score
console.log(averageScore (90,65,80,50));