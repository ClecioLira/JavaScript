// For in - estrutura de repetição
const frutas = ['Pera', 'Uva', 'Maça']
for (let indice in frutas) {
    console.log(frutas[indice])
}


const carro = {
    nome: "Gol",
    ano: "2012"
}
for (let i in carro) {
    console.log(i, carro[i])
}