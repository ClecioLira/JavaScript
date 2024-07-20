const request = (obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject({
                    text_error: xhr.statusText,
                    code_error: xhr.status,
                })
            }
        })
    })
    // MODELO ANTIGO
    // const xhr = new XMLHttpRequest();
    // xhr.open(obj.method, obj.url, true)
    // xhr.send()

    // xhr.addEventListener('load', () => {
    //     if(xhr.status >= 200 && xhr.status < 300) {
    //         obj.success(xhr.responseText) //callback de sucesso
    //     } else {
    //         obj.error({
    //             code: xhr.status, //codigo do HTTP erro
    //             msg: xhr.statusText //mensagem do status do erro
    //         })
    //     }
    // })
}

document.addEventListener('click', e => {
    const el = e.target //pega o click
    const tag = el.tagName.toLowerCase() //a variavel tag recebe a tag do html

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href') //pega o href
    try {
        const response = await request({
            method: 'GET',
            url: href,
        })
        carregaResultado(response)
    } catch (err) {
        console.log(err)
    }

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}