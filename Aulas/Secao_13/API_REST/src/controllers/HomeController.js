class HomeController { // cria classe
  index(req, res) { // cria rota index
    res.json({ // responde em formato json
      tudoCerto: true
    })
  }
}

export default new HomeController() // exporta a classe home controller
