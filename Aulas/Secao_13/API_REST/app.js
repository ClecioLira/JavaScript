import dotenv from 'dotenv' // pega o dotenv

dotenv.config() // config do dotenv

import './src/database' // importacao da pasta do banco de dados

import express from 'express'; // pega o express
import homeRoutes from './src/routes/homeRoutes' // pega a homeRoutes
import userRoutes from './src/routes/userRoutes' // pega a userRoutes
import tokenRoutes from './src/routes/tokenRoutes' // pega a tokenRoutes
import alunoRoutes from './src/routes/alunoRoutes' // pega a alunoRoutes
import fotoRoutes from './src/routes/fotoRoutes' // pega a alunoRoutes


class App { // cria a class que vai ser exportada
  constructor() {
    this.app = express(); // app recebe o express
    this.middlewares() // chama os middlewares
    this.routes() // chama os routes
  }

  middlewares() {
    this.app.use(express.urlencoded({extended: true})) // usando o alinhamento de objetos
    this.app.use(express.json()) // usando o alinhamento de json
  }

  routes() {
    this.app.use('/', homeRoutes) // usando o caminho homeroutes
    this.app.use('/users/', userRoutes) // usando o caminho userroutes
    this.app.use('/tokens/', tokenRoutes) // usando o caminho tokenroutes
    this.app.use('/alunos/', alunoRoutes) // usando o caminho alunosroutes
    this.app.use('/fotos/', fotoRoutes) // usando o caminho fotoroutes
  }
}

export default new App().app // exportaando a classe app
