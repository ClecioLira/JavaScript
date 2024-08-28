/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', { // nome da tabela
      // criacao da tabela fotos e seus tipos de dados e suas configurações
      id: {
        type: Sequelize.INTEGER, // tipo do campo
        allowNull: false, // nulo?
        autoIncrement: true, // auto incrementa?
        primaryKey: true // chave primaria?
      },

      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      aluno_id: { // cria o campo que faz associação com o id da tabela aluno
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id'
        },
        onDelete: 'CASCADE', // se eu apagar um aluno as fotos dele tambem irão ser apagadas
        onUpdate: 'CASCADE' // se por um acaso o id do aluno mudar todas as fotos que estao referenciadas irão se atualizar para o novo id
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
    await queryInterface.dropTable('fotos');
  }
};

// CASCADE
// RESTRICT
// NO ACTION
// SET NULL

// ON DELETE CASCADE - se o registro pai for deletado, o
// filho tambem será.

// ON UPDATE CASCADE - se a primary key do registro pai for alterada, isso será refletido no registro do filho.

// RESTRICT - significa que qualquer tentativa de apagar ou atualizar o registro pai vai falhar lançando um erro.

// NO ACTION - significa que o MySQL não realizar nenhyma ação por você. Porém, você não poderá apagar ou atualizar a primary key do registro pai, nem conseguira alterar a foreign key do registro do filho caso a primary key do registro pai não tiver sido atualizada.

// SET NULL - se você apagar ou atualizar a primary key do registro pai, a foreign key do registro do filho será configurada para null
