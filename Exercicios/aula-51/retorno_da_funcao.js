// return, retorna um valor
// termina a funcao ali
function soma(a, b) {return a + b}
console.log(soma(2, 5))


function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}
const p1 = criaPessoa('Clécio', 'Lira')
const p2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
console.log(p1, p2)


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}
const frase = falaFrase('Olá')
const resto = frase('mundo!')
console.log(resto)


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
console.log(duplica(2), triplica(2))