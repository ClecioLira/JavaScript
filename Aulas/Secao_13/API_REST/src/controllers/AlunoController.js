import Aluno from '../models/Aluno' // pega a class Aluno
import Foto from '../models/Foto'

class AlunoController { // cria classe
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"], // mostra apenas os campos listados
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // mostra a lista em formato decrescente
      include: {
        model: Foto,
        attributes: ['url', 'originalname', 'filename']
      }
    })
    res.json(alunos)
  }

  async show(req, res) {
    try {
      const {id} = req.params

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID.']
        })
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"], // mostra apenas os campos listados
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // mostra a lista em formato decrescente
        include: {
          model: Foto,
          attributes: ['url', 'originalname', 'filename']
        }
      })

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body)

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async update(req, res) {
    try {
      const {id} = req.params

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID.']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

      const alunoAtualizado = await aluno.update(req.body)

      return res.json(alunoAtualizado)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID.']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

      await aluno.destroy()
      return res.json('Aluno deletado com sucesso.')
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      })
    }
  }
}

export default new AlunoController() // exporta a classe aluno controller
