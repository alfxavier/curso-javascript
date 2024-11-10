let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let coringa = varA;
varA = varB;
varB = varC;
varC = coringa;

console.log(varA, varB, varC)