let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
varA = varB;
varB = varC;
varD = 'A';
varC = varD;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);