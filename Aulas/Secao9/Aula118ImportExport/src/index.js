// import * as meuModulo from './modulo1'
// import qualquerNome from './modulo1' //sempre quando importar sem {} é porque estamos importando o default

import Pessoa, {nome, sobrenome} from './modulo1'
const p1 = new Pessoa(nome, sobrenome)
console.log(p1)