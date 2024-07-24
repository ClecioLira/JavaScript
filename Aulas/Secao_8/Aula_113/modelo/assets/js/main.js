// fetch('pessoas.json') //pega o arquivo/local
//     .then(resposta => resposta.json()) //pega a resposta do primeiro then e o converte para JSON
//     .then(json => carregaElementosNaPagina(json)) //pega a nova promisse com o valor JSON e manda para a função

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))


function carregaElementosNaPagina(json) {
    const table = document.createElement('table')

    for (let pessoa of json) {
        const tr = document.createElement('tr')

        let td = document.createElement('td') //cpf
        td.innerHTML = pessoa.cpf
        tr.appendChild(td)

        td = document.createElement('td') //nome
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td') //empresa
        td.innerHTML = pessoa.empresa
        tr.appendChild(td)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}