import Aluno from '../models/Aluno' // pega a class Aluno

class AlunoController { // cria classe
  async index(req, res) {
    const alunos = await Aluno.findAll()
    res.json(alunos)
  }
}

export default new AlunoController() // exporta a classe aluno controller
