class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')

        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposValidos()
        const senhasValidas = this.senhasValidas()

        if(camposValidos && senhasValidas) {
            alert('Formulario enviado')
            this.formulario.submit()
        }
    }

    senhasValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
            valid = false
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres')
        }

        return valid
    }

    camposValidos() {
        let valid = true

        // para de gerar varias linhas de erros apos os campos
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.parentElement.innerText

            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar vazio.`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) {
                    valid = false
                }
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) {
                    valid = false
                }
            }
        }

        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.")
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, "Usuário precisa conter apenas letras e/ou números.")
            valid = false
        }
        return valid
    }

    validaCpf(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, "CPF inválido.")
        }
        return true
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div')
        div.innerHTML = mensagem
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()