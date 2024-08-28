import Sequelize, {Model} from "sequelize";

export default class Foto extends Model {
  static init(sequelize) {
    super.init({ // pega os campos que estao na migration com excecao dos que se auto incrementa
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: ['Campo não pode ficar vazio.']
          }
        }
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: ['Campo não pode ficar vazio.']
          }
        }
      },

    }, {
      sequelize,
      tableName: 'fotos'
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'}) // associa a foto com o id do aluno
  }
}
