const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Bruno'}
]

// const novasPessoas = {}
// for(const {id, nome} of pessoas) {
//     novasPessoas[id] = {id, nome}
// }

// MANTEM A ORDEM DE INSERÇÃO DOS DADOS
const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

// for(const pessoas of novasPessoas.values()) {
//     console.log(pessoas.id)
// }

novasPessoas.delete(1)
novasPessoas.delete(2)
console.log(novasPessoas)