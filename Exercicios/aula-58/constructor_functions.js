// função construtora retorna objetos
// função fabrica retorna objetos
// construtora -> Pessoa (new)
// elas sao um molde para criar novos objetos
function Pessoa(nome, sobrenome) {
    // atributos privados
    const ID = 123456
    const metodoInterno = function() {

    }

    // atributos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function () {
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Clécio', 'Lira')
const p2 = new Pessoa('Caua', 'Lira')

console.log(p1.nome, p2.nome)
p2.metodo()