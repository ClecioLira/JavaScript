// Valor por referência
const nomes = ['Eduardo', 'Maria', 'Joana']
const novo = [...nomes]

novo.pop()
console.log(nomes)
console.log(novo)

const nomeS = 'Clecio de Lira Alves'
const nomeSeparado =  nomeS.split(' ')
console.log(nomeSeparado)

const nomeJ = ['Clecio', 'de', 'Lira', 'Alves']
const nomeJunto =  nomeJ.join(' ')
console.log(nomeJunto)