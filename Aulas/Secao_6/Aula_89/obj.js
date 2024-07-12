// const pessoa1 = new Object()
// pessoa1.nome = 'clecio'
// pessoa1.sobrenome = 'lira'
// pessoa1.idade = 22
// pessoa1.falarNome = function () {
//     return `${this.nome} está falando`
// }
// pessoa1.getNascimento = function () {
//     const dataAtual = new Date()
//     const data = dataAtual.getFullYear() - this.idade
//     return `Nasceu no ano de ${data}`
// }

// for(let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }


// factory functions e constructor functions / classes
// function CriaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,

//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }
// const p1 = CriaPessoa('Clecio', 'Lira')
// console.log(p1.nomeCompleto)

// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome

//     this.nomeCompleto = function() {
//         return `${this.nome} ${this.sobrenome}`
//     }
// }
// const p =  new Pessoa('Clecio', 'Lira')
// console.log(p.nomeCompleto())

