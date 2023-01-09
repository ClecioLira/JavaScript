//Atribuição via desestruturação (array)
//...rest(resto)
//...spread(espalhar/ distribuir)

/*
//               0     1    2    3    4    5    6    7    8   <- indice
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
//desestruturação
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros

console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)
*/

/*
//pular arrays
//               0     1    2    3    4    5    6    7    8   <- indice
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
//desestruturação
const [um, ,tres, ,cinco, ,sete] = numeros

console.log(um, tres, cinco, sete)
*/

//arrays dentro de arrays
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
//desestruturação
const [,[,,seis]] = numeros
const [lista1, lista2, lista3] = numeros

console.log(numeros[1][2])
console.log(seis)
console.log(lista2[2])