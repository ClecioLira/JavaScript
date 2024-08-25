import Aluno from '../models/Aluno' // pega a class Aluno

class HomeController { // cria classe
  async index(req, res) { // cria rota index
    const novoAluno = await Aluno.create({ // cria o novo aluno e manda os valores dos campos
      nome: 'Maria',
      sobrenome: 'Lira',
      email: 'aluno@aluno.com',
      idade: '22',
      peso: 63,
      altura: 1.90
    })
    res.json(novoAluno) // retorna os dados em formato json
  }
}

export default new HomeController() // exporta a classe home controller
