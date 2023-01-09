//let não pode ser redeclarado (dentro do próprio escopo)
//var pode ser redeclarado

//let tem escopo de bloco { ... bloco}
//var só tem escopo de função

const verdadeiro = true

/*
let nome = 'Luiz' //criando
var nome2 = 'Luiz' //criando

var nome2 = 'Otávio' //redeclarado
if (verdadeiro) {
    let nome = 'Otávio' //criando
    var nome2 = 'Rogério' //redeclarando

    if (verdadeiro) {
        let nome = 'Ronaldo' //criando
        var nome2 = 'Outra coisa' //redeclarando
    }
}

console.log(nome, nome2)
*/


//var só se bloqueia dentro de uma function
/*
function falaOi() {
    if (verdadeiro) {
        let nome = 'Luiz'
        var sobrenome = 'Miranda'
    }
    console.log(sobrenome)
}

falaOi()
*/

//roichin
console.log(sobrenome)

var sobrenome = 'Miranda' //a maquina do JS eleva a variável VAR para o topo e da o resultado no console = undefined.