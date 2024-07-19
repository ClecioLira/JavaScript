function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false)
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase())
        }, tempo)
    })
}
const promises = [
    esperaAi('Primeira Promisse', rand(1,3)),
    esperaAi('Segunda Promisse', rand(1,3)),
    esperaAi('Terceira Promisse', rand(1,3)),
]
// promisse.all - pega um array com promessas e somente apos ele resolver todas as promessas ele lhe retorna um array com todos os valores 
Promise.all(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((err) => {
        console.log(err)
    })

// promisse.race - a promisse que for resolvida em menor tempo é entregue e as demais são descartadas
Promise.race(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((err) => {
        console.log(err)
    })

// promisse.resolve
function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a pagina', rand(1,5))
    }
}
baixaPagina()
    .then(dadosPag => {
        console.log(dadosPag)
    })
    .catch(e => console.log(e))

// promisse.reject
function baixaPagina() {
    const emCache = false
    
    if(!emCache) {
        return Promise.reject('Baixei a pagina')
    } else {
        return esperaAi('Pagina em cache', rand(1,5))
    }
}
baixaPagina()
    .then(dadosPag => {
        console.log(dadosPag)
    })
    .catch(e => console.log('ERROR:', e))