// let controle = 0

// while (controle <=  10) {
//     console.log(controle)
//     controle++ // NUNCA ESQUEÇA DE FAZER A ITERAÇÃO PARA NÃO FICAR UM LAÇO INFINITO
// }

// console.log('Segue a vida...')

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // Deixa o número inteiro
}

const min = 1
const max = 50
let rand = random(min, max)

// while (rand !== 10) {
//     rand = random(min, max)
//     console.log(rand)
// }

do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)