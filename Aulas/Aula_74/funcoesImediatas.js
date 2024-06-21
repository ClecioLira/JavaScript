// IIFE
(function(idade, peso) {
    const sobrenome = 'lira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    (function falaNome() {
        console.log(criaNome('clecio'));
    })();

    console.log(idade, peso)
})(22, 65);