import User from '../models/User' // pega a class User

class UserController { // cria classe
  async store(req, res) { // cria rota index
    try {
      const novoUser = await User.create(req.body)
      res.json(novoUser) // retorna os dados em formato json
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }
}

export default new UserController() // exporta a classe User controller
