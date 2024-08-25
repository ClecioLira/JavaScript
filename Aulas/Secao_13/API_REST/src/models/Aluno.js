import Sequelize, {Model} from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({ // pega os dados que estao na migration com excecao dos que se auto incrementa
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT
    }, {
      sequelize
    })
    return this
  }
}
