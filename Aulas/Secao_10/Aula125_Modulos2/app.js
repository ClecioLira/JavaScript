const Cachorro = require('./mod2')

// const c1 = new Cachorro('Big')
// console.log(c1.nome)
// c1.latir()

const path = require('path')
console.log(__filename) // nome do arquivo atual
console.log(__dirname) // nome da pasta atual
console.log(path.resolve(__dirname, '..', '..')) // voltar 2 pastas