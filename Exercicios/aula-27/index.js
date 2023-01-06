// condição ? 'Valor para VERDADEIRO' : 'Valor para FALSO'
//Encurtar um código

const pontuacaoUsuario = 999
/*
if (pontuacaoUsuario <= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário NORMAL')
}
*/


//Modelo encurtado
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário NORMAL'
console.log(nivelUsuario)

//FallBack
const corUsuario = 'pink'
const corPadrao = corUsuario || 'Preta'
console.log(corPadrao)