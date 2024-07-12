// copiar objeto sem importar os valores
//spread operator
const produto = {nome: 'caneca', preco: 1.8}
const outraCoisa = {
    ...produto,
    material: 'papelão'
}
outraCoisa.nome = 'caixa'
outraCoisa.preco = 2.8

// object.assign
const produto2 = {nome: 'caneca', preco: 1.8}
const outraCoisa2 = Object.assign({}, produto, {
    material: 'papelão'
})
outraCoisa2.nome = 'caixa'
outraCoisa2.preco = 2.8

// object.keys = ver as chaves do objeto em um array
const verChaves = Object.keys(produto)

// object.freeze = para congelar o objeto e não ser mais alterado
const congelar = Object.freeze(outraCoisa)

// ver as propriedades do objeto
const verPropriedades = Object.getOwnPropertyDescriptor(produto, 'nome')

// mostrar os valores do objeto
const mostrarValor = Object.values(produto2)

// mostra um array com as chaves e os valores do objeto
const mostrarObjeto = Object.entries(outraCoisa2)

