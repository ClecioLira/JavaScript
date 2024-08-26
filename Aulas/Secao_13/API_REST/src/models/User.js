import Sequelize, {Model} from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init({ // pega os dados que estao na migration com excecao dos que se auto incrementa
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: { // valida o campo nome e define a quantidade de caracteres dentro o args
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres.'
          }
        }
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe.'
        },
        validate: {
          isEmail: { // valida o campo email
            msg: 'Email inválido.'
          }
        }
      },

      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      password: {
        type: Sequelize.VIRTUAL, // campo que existe aqui virtualmente, ele nao irá existir na base de dados
        defaultValue: '',
        validate: {
          len: { // valida o campo nome e define a quantidade de caracteres dentro o args
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres.'
          }
        }
      },

    }, {
      sequelize
    })

    // adiciona um hook para que antes de salvar ele execute uma funcao que pegue a password adicione o hash e coloque essa senha com o hash na password_hash que é o que vai ser salvo na base de dados
    this.addHook('beforeSave', async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8)
    })

    return this
  }
}
