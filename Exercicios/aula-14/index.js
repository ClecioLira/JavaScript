// IEEE 754-2008 padrão de precisão dos números
// resolver o problema da inprecisão dos numero do JS
// num1 = Number(num1.toFixed(2));
// outro modo é num1 = ((num1 * 100) + (num2 * 100)) / 100;
let num1 = 10;
let num2 = 22.5548413;

// transformar number em string temporariamente
console.log(num1.toString() + num2);

// ajustar a quantidade de casas decimais de um number
console.log(num2.toFixed(2));

// saber se o número mostrado na tela é inteirou ou não
console.log(Number.isInteger(num2));

// saber se a variável é ou não um número
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));

