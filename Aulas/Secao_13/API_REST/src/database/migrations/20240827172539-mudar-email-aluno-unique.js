/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('alunos', 'email',  // edita a coluna email da tabela alunos
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    );
  },

  async down () {}
};
