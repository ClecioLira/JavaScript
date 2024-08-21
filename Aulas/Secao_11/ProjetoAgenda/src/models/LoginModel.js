const mongoose = require('mongoose');
const validator = require('validator'); // chama o validator
const bcryptjs = require('bcryptjs'); // chama o bcryptjs

const LoginSchema = new mongoose.Schema({ // aqui seleciona o que vai ser requerido no sistema e qual vai ser o tipo
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body //pega os valores do req.body que está no controller
        this.erros = [] //flag de erros, caso tenha algum erro adicionado ao array o cadastro nao será concluido
        this.user = null
    }

    async entrar() {
        this.valida()

        if(this.erros.length > 0) return

        this.user = await LoginModel.findOne({email: this.body.email}) // checa se o usuario com esse email ja existe

        if(!this.user) {
            this.erros.push('Usuário não existe.')
            return
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.erros.push('Senha inválida.')
            this.user = null
            return
        }


    }

    async criar() {
        this.valida() // chama o metodo valida

        if(this.erros.length > 0) return
        
        await this.userExists() // verifica se aquele usuario ja existe

        if(this.erros.length > 0) return

        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt) // gera um hash da senha junto com o salt

        this.user = await LoginModel.create(this.body) // registra os valores dos campos na base de dados
    }

    async userExists() {
        this.user = await LoginModel.findOne({email: this.body.email}) // verifica se ja existe alguem com aquele email
        if(this.user) this.erros.push('Usuário já existe.') // caso exista ele manda o erro

    }

    valida() { // metodo que valida os campos
        this.cleanUp() // ele vai garantir que tudo que está dentro do body é uma string
        // o email precisa ser valido
        if(!validator.isEmail(this.body.email)) {
            this.erros.push('Email inválido.')
        }
        // a senha precisa ter entre 3 e 50 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.erros.push('Sua senha precisa ter entre 3 e 50 caracteres')
        }
    }

    cleanUp() {
        for(let key in this.body) { // pega todas as chaves do body
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '' // caso venha algo do campo que nao seja uma string ele vai converter aquele campo em uma string vazia
            }
        }

        this.body = { // garantir os campos que precisa nesse modulo
            // nao salva o token
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login