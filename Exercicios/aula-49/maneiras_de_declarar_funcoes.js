// Declaração de função (Function hoisting)
// First-class object (Objetos de primeira classe)

falaOi()
function falaOi() {
    console.log('Oi')
}

// Function expression
const souUmDado = function() {
    console.log('Sou um dado.')
}

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando...')
    }
}
obj.falar()