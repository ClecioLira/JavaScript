const express = require('express')
const route = express.Router()
const HomeController = require('./src/controllers/HomeController')
const LoginController = require('./src/controllers/LoginController')

//ROTA HOME
route.get('/', HomeController.index) //pega a exportação da pagina index no HomeController e renderiza ela

//ROTA LOGIN
route.get('/login/index', LoginController.index) //pega a exportação da pagina login no LoginController e renderiza ela

module.exports = route