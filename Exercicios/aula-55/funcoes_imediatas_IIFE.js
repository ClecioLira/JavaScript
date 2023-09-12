// IIFE -> immediately invoked function expression
// (function() {
//     console.log(12344)
// })()

(function(idade, peso, altura) {
    const sobrenome = 'Lira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Clécio'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80)