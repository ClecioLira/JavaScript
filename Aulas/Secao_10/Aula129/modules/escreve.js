const fs = require('fs').promises

module.exports = async function(caminho, dados) {
    try {
        await fs.writeFile(caminho, JSON.stringify(dados, null, 2))
        console.log('Arquivo salvo com sucesso!')
    } catch (error) {
        console.error(`Erro ao escrever no arquivo: ${error.message}`)
        throw error
    }
}
