//Symbol
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0
    }

    get velocidade() {
        console.log('GET')
        return this[_velocidade]
    }

    set velocidade(valor) {
        console.log('SET')
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    acelerar() {
        if(this[_velocidade] >= 100) return false
        this[_velocidade] ++
    }

    freiar() {
        if(this[_velocidade] <= 0) return false
        this[_velocidade] --
    }

}

const c1  = new Carro('fusca')
console.log(c1.velocidade)
c1.velocidade = 15
