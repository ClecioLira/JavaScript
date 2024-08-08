require('dotenv').config() //variaveis de ambiente configuradas no .env
const express = require('express') //chama o express
const app = express() //inicia o express

const mongoose = require('mongoose') //chama o mongoose
mongoose.connect(process.env.CONNECTIONSTRING) //conecta o mongoose ao banco de dados
    .then(() => {
        app.emit('Pronto')
    })
    .catch(error => console.log(error))

const session = require('express-session')
const MongoStore = require('connect-mongo') //salvar as sessoes dentro da base de dados
const flash = require('connect-flash') //mensagens autodestrutivas que só aparece uma vez, sem sessão essas mensagens não aparecem
const routes = require('./routes') //rotas da aplicação
const path = require('path') //caminhos
const helmet = require('helmet') //segurança recomendado pelo express
const csrf = require('csurf') //cria um token que nao deixa nenhum site externo invadir o nosso site
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware') //chama os middlewares

app.use(helmet()) //usando o helmet
app.use(helmet.referrerPolicy({policy: ["origin", "unsafe-url"]}))
app.use(express.urlencoded({extended: true})) //pode postar formularios dentro da aplicacao
app.use(express.json()) //pode postar JSON dentro da aplicacao
app.use(express.static(path.resolve(__dirname, 'public'))) //arquivos estaticos que podem ser acessados diretamente

const sessionOptions = session({
    secret: 'asdjkl',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())
app.set('views', path.resolve(__dirname, 'src', 'views')) //caminhos dos nossos EJS
app.set('view engine', 'ejs') //a engine que renderiza o EJS

app.use(csrf())

//Nossos middlewares
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes) //chamando as rotas

app.on('Pronto', () => { //ouve a conexão da aplicação
    app.listen(3000, () => {
        console.log(`Acessar http://localhost:3000`)
        console.log('Servidor executando na porta 3000')
    })
})