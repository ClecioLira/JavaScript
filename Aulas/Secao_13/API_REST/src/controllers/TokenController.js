import User from '../models/User' // importação do usuario
import jwt from 'jsonwebtoken' // importação do toke

class TokenController {
  async store(req, res) { // metodo store
    const {
      email = '',
      password = '',
    } = req.body // seleciona os campos que o body vai receber

    if(!email || !password) { // se for diferente de email ou senha retorna um erro
      return res.status(401).json({
        errors: ['Credenciais inválidas.']
      })
    }

    const user = await User.findOne({where: {email}}) // verifica se o valor do email é igual ao do usuario e é existente

    if(!user) { // caso for diferente de usuario retorna um erro
      return res.status(401).json({
        errors: ['Usuário não existe.']
      })
    }

    if(!(await user.passwordIsValid(password))) { // caso a senha for invalida tambem retorna um erro
      return res.status(401).json({
        errors: ['Senha inválida.']
      })
    }

    const {id} = user // pega o id do usuario

    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, { // esse código gera um token JWT que inclui o id e o email do usuário e o assina usando uma chave secreta. O token tem uma validade definida, após a qual ele expira e não pode mais ser utilizado.
      expiresIn: process.env.TOKEN_EXPIRATION
    })

    return res.json({token}) // aqui ele retorna o token
  }
}

export default new TokenController() // exportar o token controller
