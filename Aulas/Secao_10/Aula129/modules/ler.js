const fs = require('fs').promises

module.exports = async function(caminho) {
    try {
        const dados = await fs.readFile(caminho, 'utf8')
        return dados
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`)
        throw error
    }
}
