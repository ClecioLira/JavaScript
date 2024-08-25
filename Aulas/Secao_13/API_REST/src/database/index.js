import Sequelize from "sequelize";
import dataBaseConfig from '../config/database' // pega a configuracao do banco de dados
import Aluno from '../models/Aluno' // pega o model do aluno

const models = [Aluno] // array com todos os models
const connection = new Sequelize(dataBaseConfig) // recebe a conexao com as configuracoes do banco de dados

models.forEach(model => { // percorre o array de models
  model.init(connection) // retorna o init dos models
})
