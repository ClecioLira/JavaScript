const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')
const {loginRequired} = require('./src/middlewares/middleware')

// Rotas home
route.get('/', homeController.index)

// Rotas login
route.get('/login/', loginController.index)
route.post('/login/criar', loginController.criar)
route.post('/login/entrar', loginController.entrar)
route.get('/login/logado', loginController.logado)
route.get('/login/sair', loginController.sair)

// Rotas contato
route.get('/contato/', loginRequired, contatoController.index)
route.post('/contato/criar', loginRequired, contatoController.criar)
route.get('/contato/:id', loginRequired, contatoController.editIndex)
route.post('/contato/edit/:id', loginRequired, contatoController.edit)

module.exports = route