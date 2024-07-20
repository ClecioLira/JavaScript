document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href')
        const resposta = await fetch(href)
    
        if(resposta.status !== 200) throw new Error('Erro!')
    
        const html = await resposta.text()
    
        carregaResultado(html)
    } catch(erro) {
        console.log(erro)
    }
}

function carregaResultado(resposta) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = resposta
}
