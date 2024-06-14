function funcao() {
    console.log("Oi")
}
funcao("valor");

// arguments que sustenta todos os argumentos enviados
function funcaoArg() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcaoArg(1,2,3,4,5,6,7,8,9);

// atribuição via desestruturação
function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao2({
    nome: "Clecio",
    sobrenome: "Lira",
    idade: 18
})


// com rest operator
const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador == '+') acumulador += numero;
        if (operador == '-') acumulador -= numero;
        if (operador == '/') acumulador /= numero;
        if (operador == '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50)