class FotoController { // cria classe
  async store(req, res) {
    res.json(req.file)
  }
}

export default new FotoController() // exporta a classe Foto controller
