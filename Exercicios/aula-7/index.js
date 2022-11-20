/** Regras das constantes:
 * 
 * Não podemos criar constantes com palavras já reservadas
 * Constantes precisam ter nomes significativos
 * Não pode começar o nome de uma constante com um número
 * Não podem conter espaços ou traços
 * Utilizamos camelCase
 * Case-sensitive
 * Não pode modificar o valor de uma constante
 * Não utilize VAR, utilize CONST
 * Toda constante deve ser inicializada assim que for criada
*/

const nome = 'João';
console.log(nome);

const primeiroNumero = '5';
const segundoNumero = '10';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);