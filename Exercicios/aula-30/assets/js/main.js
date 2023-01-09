//Modelo longo
/*
function zero(num) {
    return num >= 10 ? num : `0${num}`
}

let res = document.querySelector('#res')

let data = new Date()
let diaSemana = data.getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = zero(data.getHours())
let min = zero(data.getMinutes())

switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo'
        break;
    case 1:
        diaSemana = 'Segunda-Feira'
        break;
    case 2:
        diaSemana = 'Terça-Feira'
        break;
    case 3:
        diaSemana = 'Quarta-Feira'
        break;
    case 4:
        diaSemana = 'Quinta-Feira'
        break;
    case 5:
        diaSemana = 'Sexta-Feira'
        break;
    case 6:
        diaSemana = 'Sábado'
        break;

    default:
        break;
}

switch (mes) {
    case 0:
        mes = 'Janeiro'
        break;
    case 1:
        mes = 'Fevereiro'
        break;
    case 2:
        mes = 'Março'
        break;
    case 3:
        mes = 'Abril'
        break;
    case 4:
        mes = 'Maio'
        break;
    case 5:
        mes = 'Junho'
        break;
    case 6:
        mes = 'Julho'
        break;
    case 7:
        mes = 'Agosto'
        break;
    case 8:
        mes = 'Setembro'
        break;
    case 9:
        mes = 'Outubro'
        break;
    case 10:
        mes = 'Novembro'
        break;
    case 11:
        mes = 'Dezembro'
        break;

    default:
        break;
}

res.innerHTML += `${diaSemana}, ${dia} de ${mes} de ${ano} <br>
                  ${hora}:${min}`
*/

//Modelo facil e rapido
let res = document.querySelector('.res')
let data = new Date()
let opcoes = {
    dateStyle: 'full'
}

res.innerHTML += data.toLocaleDateString('pt-BR', opcoes)