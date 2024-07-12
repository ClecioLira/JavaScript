function retornaFuncao() {
    const nome = 'clecio'
    return function () {
        return nome
    }
}
const f1 = retornaFuncao()
console.dir(f1())