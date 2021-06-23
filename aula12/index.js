let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// varCoringa = varC;
// varC = varA;
// varA = varB;
// varB = varCoringa;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);