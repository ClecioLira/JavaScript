/**
 * operadores aritméticos + - 
 * + adição / concatenação
 * - subtração
 * * multiplicação
 * / divisão
 * ** potênciação
 * % resto da divisão
*/

/**
 * precedência
 * ()
 * **
 * * / %
 * + -
 */

// incrementar ++
// decrementar --

let contador = 10;
--contador
console.log(contador)

const passo = 1;
let contar = 1;
contar = contar + passo;
console.log(contar)
contar = contar + passo;
console.log(contar)
contar = contar + passo;
console.log(contar)

// operadores de atribuição 
let contagem = 0;
contagem += 2;
contagem += 2;
contagem += 2;
contagem += 2;
console.log(contagem)

// NaN - not a number
// parseInt - numero inteiro
// parseFloat - numero com decimais
// Number - vai se virar para saber o que é aquilo

const num1 = 10;
const num2 = Number('L2');
console.log(num1 + num2);
console.log(typeof num2);