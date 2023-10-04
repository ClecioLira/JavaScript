const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice, delete, elem1, elem2, elem3...)

//pop
//const removidos = nomes.splice(0, 1, 'Mario')

//push
nomes.splice(nomes.length, 0, 'Luiz')

//unshift
nomes.splice(0, 0, 'Otavio')
console.log(nomes)