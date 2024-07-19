function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    //resolver - resolve a promessa e cai no .then
    //reject - pega o erro e vai direto para o .catch
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor Invalido')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Frase 1', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(2222, aleatorio(1,3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', aleatorio(1,3))
    })
    .catch(e => {
        console.log('Error: ' + e)
    })