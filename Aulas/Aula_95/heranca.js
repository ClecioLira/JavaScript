//Produto -> aumento, desconto
//Camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valor) {
    this.preco += valor
}
Produto.prototype.desconto = function(valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco) //herda os atributos de produto
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype) //herda os metodos de produto
Camiseta.prototype.constructor = Camiseta //seta o construtor

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (value) {
            if(typeof value !== 'number') return
            estoque = value
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const c1 = new Camiseta('camisa', 7.5, 'preto')
c1.aumento(10)
console.log(c1)
const c2 = new Caneca('caneca', 20, 'porcelana', 5)
c2.estoque = 10
console.log(c2)
console.log(c2.estoque)


