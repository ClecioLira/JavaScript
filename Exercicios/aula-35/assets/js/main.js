const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'article', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
]

const res = document.querySelector('.res')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

res.appendChild(div)