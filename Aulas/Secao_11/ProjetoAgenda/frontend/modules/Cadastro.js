import validator from "validator"

export default class Cadastro {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('#emailCad')
        const passwordInput = el.querySelector('#senhaCad')
        const erroEmail = document.querySelector('.erroEmailCad')
        const erroSenha = document.querySelector('.erroSenhaCad')

        let erro = false

        if(!validator.isEmail(emailInput.value)) {
            erroEmail.innerText = 'Email inválido'
            erro = true
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            erroSenha.innerText = 'Senha precisa ter entre 3 e 50 caracteres'
            erro = true
        }

        if(!erro) el.submit() // caso nao tenha nenhum erro ele envia o formulario
    }
}