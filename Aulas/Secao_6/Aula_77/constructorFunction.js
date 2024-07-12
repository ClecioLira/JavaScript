function Pessoa(nome, sobrenome) {
    const ID = 132456;

    const metodoInterno = function () {
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + " sou um metodo")
    }
}

const p1 = new Pessoa('clecio', 'lira')
console.log(p1.nome)
p1.metodo()