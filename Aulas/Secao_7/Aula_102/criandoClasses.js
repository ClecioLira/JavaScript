class Pessoa {
    //colocar parametros para a classe
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //metodos
    falar() {
        console.log('falando')
    }
}

const p1 = new Pessoa('clecio', 'lira')
console.log(p1)
p1.falar()