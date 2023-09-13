// constructor function
function Calculadora() {
    // atributos
    // seleciona o input display
    this.display = document.querySelector('.display')

    // inicia a calculadora
    this.inicia = () => this.cliqueBotoes()

    // metodos
    // realiza as contas da calculadora, caso seja digitado alguma conta inválida ele irá informar
    this.realizaConta = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if(!conta) alert('Conta Inválida!')

            this.display.value = String(conta)
        } catch(e) {
            alert('Conta Inválida')
            return
        }

    }

    // botao para apagar 1 digito por vez
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1)

    // botao para apagar tudo no display
    this.clearDisplay = () => this.display.value = ''

    // funcao que seleciona os botoes pelo click
    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            // variavel que pega o elemento no click
            const el = e.target

            // botao clicado mostra o valor no display
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)

            // botao que limpa todo o display
            if(el.classList.contains('btn-clear')) this.clearDisplay()

            // botao que apaga apenas 1 digito por vez
            if(el.classList.contains('btn-dell')) this.apagaUm()

            // botao que realiza a conta
            if(el.classList.contains('btn-eq')) this.realizaConta()
        })
    }
    // funcao que quando o botao for clicado ele vai aparecer o valor no display
    this.btnParaDisplay = valor => this.display.value += valor
}
let calculadora = new Calculadora()
calculadora.inicia()