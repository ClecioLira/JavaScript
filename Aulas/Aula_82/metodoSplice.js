const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia']
//nomes.splice(indice atual, quantos itens eu quero remover, atributos para adicionar a partir do indice selecionado)

// simula o pop
const pop = nomes.splice(-1, 1)

// simula o shift
const shift = nomes.splice(0, 1)

// simula o push
const push = nomes.splice(nomes.length, 0, 'clecio')

// simula o unshift
const unshift = nomes.splice(0, 0, 'maria')