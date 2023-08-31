// argumentos que sustenta todos os argumentos enviados
// apenas para funcoes que comecam com 'function'
// arguments não funciona em arrow function
function funcao(a,b,c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total, a,b,c)
}
funcao(1,2,3,4,5,6,7,8,9)


function funcao2(a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f)
}
funcao2(1,2,3,4)


function funcao3(a, b = 2, c = 6) {
    console.log(a + b + c)
}
funcao3(2, undefined, 10)


// Desestruturação de objetos
function funcao4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
let obj = {nome: 'Clécio', sobrenome: 'Lira', idade: 21}
funcao4(obj)


// Desestruturação de array
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao5(['Luiz', 'Otávio', 30])


// rest operator, sempre deve ser o último parâmetro
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}
conta('+', 1, 20,30,40,50)