// factory function
function criaCalculadora() {
    return {
        // atributos
        display: document.querySelector('.display'),

        // inicia a calculadora
        inicia() {
            this.cliqueBotoes()
        },
        // metodos
        
        // realiza a conta da calculadora porém tenha muito cuidado com a funcão EVAL()
        realizaConta() {
            let conta = this.display.value
            
            try {
                conta = eval(conta)
                
                if (!conta) {
                    alert('Conta inválida!')
                    return
                }
                
                this.display.value = String(conta)
            } catch (e) {
                alert('Conta inválida!')
                return
            }
        },
        
        // apaga 1 numero por vez
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        // adicionando valor quando o clear for clicado
        clearDisplay() {
            this.display.value = ''
        },

        // adiciona funcoes aos botoes
        cliqueBotoes() {
            document.addEventListener('click', e => {
                // selecionar o click na tela
                const el = e.target

                // botoes numericos e sinais
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                // botao limpar
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                // botao apagar 1 por vez
                if(el.classList.contains('btn-dell')) {
                    this.apagaUm()
                }

                // botao igual
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            })
        },
        
        // mostra valor dos botoes clicados no display
        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()