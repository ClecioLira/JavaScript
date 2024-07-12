// travar as propriedades
// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //deixa visivel
        value: estoque, //mostra valor
        writable: false, //pode alterar o valor
        configurable: false //pode reconfigurar a chave
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //deixa visivel
            value: nome, //mostra valor
            writable: true, //pode alterar o valor
            configurable: true //pode reconfigurar a chave
        },
        preco: {
            enumerable: true, //deixa visivel
            value: preco, //mostra valor
            writable: true, //pode alterar o valor
            configurable: true //pode reconfigurar a chave
        }
    })

}
const p1 = new Produto('camiseta', 20, 3)
console.log(p1)