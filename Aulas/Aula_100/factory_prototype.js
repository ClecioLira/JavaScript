//desacomplados
const falar = {
    falar() {
        console.log('falando')
    }
}
const comer = {
    comer() {
        console.log('comendo')
    }
}
const beber = {
    beber() {
        console.log('bebendo')
    }
}

const pessoaPrototype = {...falar, comer, beber}

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('clecio', 'lira')
console.log(p1.nome)
p1.falar()