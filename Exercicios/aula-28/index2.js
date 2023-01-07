function zeroAEsquerda (num) { //adicionar um 0 a esquerda dos números menores que 10
    return num >= 10 ? num : `0${num}`
}

function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = (data.getMonth()) +1
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formatarData(data)
console.log(dataBrasil)