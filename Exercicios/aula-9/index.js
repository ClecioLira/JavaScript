// Primeira diferença entre VAR e LET
// ECMAScript 2015 (ES6)
nome = 'Luiz'; // NÃO FAÇA ISSO

// No VAR é aceito a redeclaração da variável
var nome = 'Pedro';
var nome = 'Otávio';
console.log(nome);

// No LET não é aceito a redeclaração da variável
let nome1 = 'Clécio';
let nome = 'Lira';
console.log(nome1);