const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0
let timer;

function criaSegundo(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaSegundo(segundos)
    }, 1000)
}

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
})


iniciar.addEventListener('click', function (evento) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
})
pausar.addEventListener('click', function (evento) {
    relogio.classList.add('pausado')
    clearInterval(timer)
})