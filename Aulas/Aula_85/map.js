// map = vai ter sempre o mesmo tamanho do valor original
// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobraNumeros = numeros.map(valor => valor * 2)
// console.log(dobraNumeros)

// retorne apenas uma string com o nome da pessoa
// remova apenas a chave nome do objeto
// adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
const retornaString = pessoas.map(valor => valor.nome);
const removeNome = pessoas.map(valor => ({idade: valor.idade}))
const adicionaID = pessoas.map((valor, indice) => {
    const newObj = {...valor}
    newObj.id = indice + 1
    return newObj
})
console.log(retornaString)
console.log(removeNome)
console.log(adicionaID)