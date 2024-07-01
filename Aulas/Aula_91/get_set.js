// get e setters
// maneira de proteger as minhas propriedades
// construtora
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //deixa visivel
        // value: estoque, //mostra valor
        // writable: false, //pode alterar o valor
        configurable: false, //pode reconfigurar a chave

        get: function () {
            return estoque
        },

        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log("Valor invalido")
                return
            } 

            estoque = valor
        }
    })

}
const p1 = new Produto('camiseta', 20, 3)
console.log(p1)

//fabrica
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },

        set nome(valor) {
            nome = valor
        }
    }
}