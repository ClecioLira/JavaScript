// setInterval configura um intervalo de tempo para que uma função seja executada em determinado momento
function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval (function () {
    console.log(mostraHora())
}, 1000) // A cada segundo passado ele vai executar o código


// setTimeout é uma função que executa uma função depois que o tempo expira
setTimeout (function () {
    clearInterval(timer)
}, 5000)

setTimeout (function () {
    console.log('Olá mundo!')
}, 7000)