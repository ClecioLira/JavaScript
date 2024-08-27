import jwt from 'jsonwebtoken' // importacao do jwt
import User from '../models/User'

export default async (req, res, next) => { // exporta a funcao
  const {authorization} = req.headers // pega a authorization do header

  if(!authorization) { // se for diferente de authorization retorna um erro
    return res.status(401).json({
      errors: ['Login required']
    })
  }

  const [, token] = authorization.split(' ')

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET) // checa o token
    const {id, email} = dados

    const user = await User.findOne({ // verifica se os dados sao os mesmo após a atualizacao de dados
      where: {
          id,
          email
      }
    })

    if(!user) {
      return res.status(401).json({ // caso o user seja invalido retorna um erro
        errors: ['Usuário inválido.']
      })
    }

    req.userId = id
    req.userEmail = email
    return next()
  } catch (e) {
    return res.status(401).json({ // caso o token seja invalido retorna um erro
      errors: ['Token expirado ou inválido']
    })
  }
}
