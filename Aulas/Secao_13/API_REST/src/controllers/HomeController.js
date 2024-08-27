class HomeController { // cria classe
  async index(req, res) { // cria rota index
    res.json('Index') // retorna os dados em formato json
  }
}

export default new HomeController() // exporta a classe home controller
