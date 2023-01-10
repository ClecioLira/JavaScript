//Atribuição via desestruturação (objetos)
//criação do objeto
const pessoa = {
    nome: 'Clécio',
    sobrenome: 'Lira',
    idade: 21,
    endereco: {
        rua: 'Felix Amaro',
        numero: 244
    }
}
/*
//atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa
*/

/*
//criar uma variavel dentro da desestruturação
const { nome: test = '', sobrenome} = pessoa
console.log(test, sobrenome)
*/

//escolher um objeto dentro de outro objeto
const { endereco: {rua} } = pessoa
console.log(rua)