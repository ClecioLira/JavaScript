const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')

// Rotas home
route.get('/', homeController.index)

// Rotas login
route.get('/login/', loginController.index)
route.post('/login/criar', loginController.criar)
route.post('/login/entrar', loginController.entrar)
route.get('/login/logado', loginController.logado)
route.get('/login/sair', loginController.sair)

module.exports = route