import User from '../models/User' // pega a class User

class UserController { // cria classe
  // STORE/CREATE
  async store(req, res) { // metodo store/create
    try {
      const novoUser = await User.create(req.body) // cria o novo usuario
      const {id, nome, email} = novoUser
      return res.json({id, nome, email}) // retorna o novo usuario
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // caso dê algum erro aqui ele é retornado
      })
    }
  }

  // INDEX
  async index(req, res) { // metodo index
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'] // Só é mostrado apenas esses campos
      }) // pega todos os usuarios do banco
      return res.json(users) // retorna todos os usuarios e mostra eles
    } catch (e) {
      return res.json(null) // caso dê algum erro vai retornar null
    }
  }

  // SHOW
  async show(req, res) { // metodo show
    try {
      const user = await User.findByPk(req.params.id) // pega o usuario de acordo com seu id
      const {id, nome, email} = user // instancia quais dados vai querer mostrar do usuario
      return res.json({id, nome, email}) // retorna o usuario e seus dados
    } catch (e) {
      return res.json(null) // caso dê algum erro vai retornar null
    }
  }

  // UPDATE
  async update(req, res) { // metodo update
    try {
      const user = await User.findByPk(req.userId) // pega a primary key de acordo com o id do usuario

      if(!user) { // caso o id seja diferente dos usuarios cadastrados
        return res.status(400).json({
          errors: ['Usuário não existe'] // retorna esse erro
        })
      }

      const novosDados = await user.update(req.body) // caso o usuario exista vai atualizar os seus dados
      const {id, nome, email} = novosDados

      return res.json({id, nome, email}) // e retornar os novos dados
    } catch (e) {
      console.log(e)
      // return res.status(400).json({
      //   errors: e.errors.map(err => err.message) // caso aconteca algum erro ele vai retornar o erro
      // })
    }
  }

  // DELETE
  async delete(req, res) { // metodo delete
    try {
      const user = await User.findByPk(req.userId) // pega a primary key de acordo com o id do usuario

      if(!user) { // caso o id seja diferente dos usuarios cadastrados
        return res.status(400).json({
          errors: ['Usuário não existe'] // retorna esse erro
        })
      }

      await user.destroy() // caso exista o usuario sera deletado

      return res.json('Usuario apagado com sucesso') // retorna falando que o usuario foi apagado com sucesso
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message) // caso aconteca algum erro ele vai retornar o erro
      })
    }
  }
}

export default new UserController() // exporta uma nova classe User controller
