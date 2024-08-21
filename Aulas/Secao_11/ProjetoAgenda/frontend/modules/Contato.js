export default class Contato {
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
        const nomeInput = el.querySelector('input[name="nome"]')
        const telefoneInput = el.querySelector('input[name="telefone"]')
        const emailInput = el.querySelector('input[name="email"]')

        const nomeErro = document.querySelector('.nomeErro')
        const telefoneErro = document.querySelector('.telefoneErro')
        const emailErro = document.querySelector('.emailErro')

        let erro = false

        if(!nomeInput.value) {
            nomeErro.innerText = 'Nome é um campo obrigatório.'
            erro = true
        } else {
            nomeErro.innerText = ''
            erro = false
        }

        if(!telefoneInput.value && !emailInput.value) {
            telefoneErro.innerText = 'Adicione pelo menos um tipo de contato.'
            emailErro.innerText = 'Adicione pelo menos um tipo de contato.'
            erro = true
        } else {
            telefoneErro.innerText = ''
            emailErro.innerText = ''
            erro = false
        }

        if(!erro) el.submit()
    }
}