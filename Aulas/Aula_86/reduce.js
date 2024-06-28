// reduz todo array em um valor unico
// Some todos os numeros
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor
    return acumulador
}, 0)

const total2 = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 1) acumulador.push(valor)
    return acumulador
}, [])

const total3 = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
// console.log(total3)


// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 79},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
const pessoaVelha = pessoas.reduce((acm, valor) => {
    if(acm.idade > valor.idade) return acm
    return valor
})
console.log(pessoaVelha)