import validator from "validator"

export default class Login {
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
        const emailInput = el.querySelector('#emailLog')
        const passwordInput = el.querySelector('#senhaLog')
        const erroEmail = document.querySelector('.erroEmailLog')
        const erroSenha = document.querySelector('.erroSenhaLog')

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