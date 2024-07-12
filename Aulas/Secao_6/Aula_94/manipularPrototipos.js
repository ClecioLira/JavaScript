// new object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

// new object -> Object.prototype
const objB = {
    chaveB: 'B'
    // __proto__: objA
}

Object.setPrototypeOf(objB, objA) // pega as propriedades do objA e replica no objB
Object.getPrototypeOf(objB) // mostra a propriedades do obj que esta entre os parenteses

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(perc) {
    this.preco = this.preco - (this.preco * (perc / 100))
}

Produto.prototype.aumento = function(perc) {
    this.preco = this.preco + (this.preco * (perc / 100))
}

const p1 = new Produto('Camiseta', 50)

const p2 = {
    nome: 'Caneca',
    preco: 20
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(10)

const p3 = Object.create(Produto.prototype, {
    nome: {
        value: 'Calça',
        enumerable: true,
        writable: true,
        configurable: true
    },
    preco: {
        value: 40,
        enumerable: true,
        writable: true,
        configurable: true
    }
})
p3.desconto(10)
console.log(p3)