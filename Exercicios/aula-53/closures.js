// Closure é a habilidade que a função tem em acessar o seu escopo léxico
function  retornaFuncao() {
    const nome = 'Clecio'
    return function() {
        return nome
    }
}

const funcao = retornaFuncao()
console.log(funcao())