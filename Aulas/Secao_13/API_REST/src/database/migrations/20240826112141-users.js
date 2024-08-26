/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { // nome da tabela
      // criacao da tabela users e seus tipos de dados e suas configurações
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

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // unico?
      },

      password_hash: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('users');
  }
};
