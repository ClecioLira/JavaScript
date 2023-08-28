// try {
//     console.log(naoExisto)
// } catch (error) {
//     console.log('naoExisto não existe.')
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números!')
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma(2 , 's'))
} catch (error) {
    // console.log(error) // Não é viável mostrar o erro para o usuário
    console.log('Erro desconhecido')
}