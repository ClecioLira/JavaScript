// For of - Estrutura de repetição

const nome = ['Luiz', 'Clécio', 'Jõao', 'Paulo']

/*
 FOR CLÁSSICO - geralmente usado com iteráveis como arrays ou strings
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

 FOR IN - retorna indice ou chave como strings arrays ou obejetos
for (let i in nome) {
    console.log(nome[i])
}
*/

// FOR OF - retorna o valor em si como iteráveis arrays ou strings
for (let i of nome) {
    console.log(nome)
} 