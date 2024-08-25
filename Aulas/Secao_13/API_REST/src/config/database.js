require('dotenv').config() // pega os dados que estao no .env

module.exports = {
  dialect: 'mariadb', // tipo do banco de dados
  host: process.env.DATABASE_HOST, // pega os dados do host
  port: process.env.DATABASE_PORT, // pega os dados do port
  username: process.env.DATABASE_USERNAME, // pega os dados do usuario
  password: process.env.DATABASE_PASSWORD, // pega os dados da senha
  database: process.env.DATABASE, // pega os dados do nome do banco
  define: { // pega os horarios de criacao e atualizacao dos registros do banco de dados
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at', // configura a formacao do camelCase
    updatedAt: 'updated_at' // configura a formacao do camelCase
  },
  dialectOption: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
}
