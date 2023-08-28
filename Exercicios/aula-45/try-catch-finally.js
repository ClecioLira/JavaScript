// try {
//     // Quando não há erros
//     console.log('Abri um arquivo')
//     console.log('Manilupulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')
// } catch (error) {
//     // Quando há erros
//     console.log('Tratando o erro')
// } finally {
//     // Sempre
//     console.log('Eu sempre sou executado')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleString('pt-BR', {
        // Mostrar apenas as horas
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //Tira o AM/PM e deixa contando 24h
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)  
} catch (error) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia!')
}