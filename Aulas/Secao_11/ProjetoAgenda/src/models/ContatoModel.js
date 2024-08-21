const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    criadoEm: {type: Date, default: Date.now}
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

function Contato(body) { // criando o contato com function constructor
    this.body = body
    this.erros = []
    this.contato = null
}

Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string') return
    const user = await ContatoModel.findById(id) // ou vair retornar um usuario ou vai retornar null
    return user
}

Contato.prototype.criar = async function() {
    this.valida()

    if(this.erros.length > 0) return

    this.contato = await ContatoModel.create(this.body) // manda o contato pronto para o banco de dados
}

Contato.prototype.valida = function() {
    this.cleanUp()

    if(this.body.email && !validator.isEmail(this.body.email)) this.erros.push('Email inválido.')

    if(!this.body.nome) this.erros.push('Nome é um campo obrigatório.') // vai analisar se o campo nome está preenchido

    if(!this.body.email && !this.body.telefone) { // se nao for enviado nem email nem telefone ele lança um erro
        this.erros.push('Pelo menos um cantato precisa ser enviado: email ou telefone.')
    }

}

Contato.prototype.cleanUp = function() {
    for(let key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = ''
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        telefone: this.body.telefone,
        email: this.body.email
    }
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return 
    this.valida()

    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true}) // quando voce atualizar os campos me retorne os dados alterados e nao os antigos
}

module.exports = Contato