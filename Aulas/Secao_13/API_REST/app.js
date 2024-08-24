import express from 'express'; // pega o express
import homeRoutes from './src/routes/homeRoutes' // peha a homeRoutes

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
  }
}

export default new App().app // exportaando a classe app
