const express = require('express')
const app = express()

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página home
// http://meusite.com/sobre <- GET -> Entregue a página sobre
// http://meusite.com/contato <- GET -> Entregue a página contato

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">  
        Nome: <input type="text" name="nome">
        <button>Enviar Form</button>
        </form>  
    `)
})

app.post('/', (requisicao, resposta) => {
    resposta.send('Recebi o formulário.')
})

app.get('/contato', (requisicao, resposta) => {
    resposta.send('Obrigado por entrar em contato!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})