// Escreva uma função que recebe o numero e retorne o seguinte
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivel por 3 e 5 = FizzBuzz
// Numero não divisivel por 3 e 5 = retorna o proprio numero
// Checar se o numero é realmente um numero
// Use a funcao com numeros de 0 a 100

function FizzBuzz(num) {
    if (typeof num !== 'number') return 'Não é um número!' //CHECA
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz' // DIVISIVEL POR 3 E POR 5
    if (num % 3 === 0) return 'Fizz' // DIVISIVEL POR 3
    if (num % 5 === 0) return 'Buzz' // DIVISIVEL POR 5
    return num // NÃO É DIVISIVEL NEM POR 3 NEM POR 5
}

for (let i = 0; i <= 100; i++) console.log(i, FizzBuzz(i))