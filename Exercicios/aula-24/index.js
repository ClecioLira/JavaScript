/**
 * Entre 0 e 4 - Boa Madrugada
 * Entre 5 e 11 - Bom dia
 * Entre 12 e 17 - Boa Tarde
 * Entre 18 e 23 - Boa Noite
 */
// o if pode ser usado sozinho!
// sempre que for utilizar a palavra else, precisa ter um if antes!
// posso ter vários else if na condição!
// so posso ter apenas 1 else na checagem(final)!

const hora = 2

if (hora == 0 || hora <= 4) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else if (hora <= 23) {
    console.log('Boa Noite!')
}
