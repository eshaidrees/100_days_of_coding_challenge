let prices1 = [1200,1500,1100];
let prices2 = [1400,1300,1800];
let combinedprices = [...prices1,...prices2].sort((a,b) => a-b);

console.log(combinedprices);