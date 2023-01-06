//Capturar evento do submit do formulário
const form = document.querySelector('#form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const peso = event.target.querySelector('#ipeso')
    const altura = event.target.querySelector('#ialtura')

    const pesoN = Number.parseFloat(peso.value)
    const alturaN = Number.parseFloat(altura.value)

    console.log(pesoN, alturaN)
})

//Criar parágrafo
function criarP() {
    const p = document.createElement('p')
    return p
}

//Mostrar o resultado
function setResultado(msg) {
    const resultado = document.querySelector('#res')
    resultado.innerHTML = ''
    const p = criarP()
}