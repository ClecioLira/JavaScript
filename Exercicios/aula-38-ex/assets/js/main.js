const paragrafos = document.querySelector(".paragrafos") // Retorna o primeiro elemento
const ps = paragrafos.querySelectorAll("p") // Retorna todos os paragrafos dentro da div selecionado pela variavel paragrafos| Nodelist
const estiloBody = getComputedStyle(document.body) // Pega todos os estilos do body
const backgroundColorBody = estiloBody.backgroundColor // pegou a cor de fundo do body

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF'
}