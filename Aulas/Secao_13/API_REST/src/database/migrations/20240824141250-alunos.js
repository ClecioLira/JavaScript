/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', { // nome da tabela
      // criacao da tabela alunos e seus tipos de dados e suas configurações
      id: {
        type: Sequelize.INTEGER, // tipo do campo
        allowNull: false, // nulo?
        autoIncrement: true, // auto incrementa?
        primaryKey: true // chave primaria?
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('alunos');
  }
};
