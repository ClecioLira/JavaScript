// Escreva uma função que recebe 2 numeros e retorne o maior deles

function num(num1, num2) {
    if (num1 === num2) return "Números iguais"
    if (num1 > num2) return num1
    return num2

    // operação ternária
    // return x > y ? x : y

    // Arrow function
    // const max = (x, y) => x > y ? x : y
}

console.log(num(20,30))