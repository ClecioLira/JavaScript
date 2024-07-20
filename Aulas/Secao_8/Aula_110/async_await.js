function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg === 'string') {
                resolve(msg)
                return
            }
            reject('Erro')
            return
        }, tempo)
    })
}

// esperaAi('Fase 1', rand(1,3))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand(1,3))
//     })
//     .then(valor => console.log(valor))
//     .catch(() => console.log('Valor indefinido'))

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', rand(1,3))
        console.log(fase1)
        setTimeout(() => {
            console.log('Esta promisse estava pendente:', fase1)
        }, 2000)
    
        const fase2 = await esperaAi('Fase 2', rand(1,3))
        console.log(fase2)
    
        const fase3 = await esperaAi('Fase 3', rand(1,3))
        console.log(fase3)
    
        console.log('Terminamos na fase: ', fase3)
    } catch(e) {
        e = 'Valor invalido'
        console.log(e)
    }
}
executa()

const teste = esperaAi('teste', rand(1,2))
    .then(valor => console.log(valor))
console.log(teste)