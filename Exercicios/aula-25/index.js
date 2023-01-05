// APENAS UMA condição VERDADEIRA de todo o bloco if é executado

let num = 9

if (num <= 11) {
    console.log(`O número é menor ou igual a 11.`)
}

if (num >= 0 && num <= 5) {
    console.log(`Sim, o número está entre 0 e 5.`)
} else if (num >= 6 && num <= 8) {
    console.log(`Sim, o número está entre 6 e 8.`)
} else if (num >= 9 && num <= 11) {
    console.log(`sim, o número está entre 9 e 11.`)
} else {
    console.log(`O número não está entre 0 e 11.`)
}

console.log(`Aqui vai todo o resto do código.`)