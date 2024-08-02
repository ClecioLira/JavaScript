const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

// profile/529?campanha=googleads&nome_campanha=seila

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">  
        Nome: <input type="text" name="nome">
        Outro Campo: <input type="text" name="outroCampo">
        <button>Enviar Form</button>
        </form>  
    `)
})

app.get('/testes/:idUsuarios?/:parametroOpcional?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query)
})

app.post('/', (requisicao, resposta) => {
    console.log(requisicao.body)
    resposta.send(`O que voce me enviou foi: ${requisicao.body.outroCampo}`)
})

app.get('/contato', (requisicao, resposta) => {
    resposta.send('Obrigado por entrar em contato!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})