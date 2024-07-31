const nome = 'Clécio'
const sobrenome = 'Lira'

const falaNome = () => {
    return nome + " " + sobrenome
}

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}
exports.Pessoa = Pessoa

module.exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'Qualquer coisa'
