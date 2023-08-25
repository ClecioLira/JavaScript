const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let numero of numeros) {
    if (numero === 2 || numero === 4 || numero === 6) continue // Aqui ele pula o numero selecionado e conta o proximo

    if (numero === 7) break // Aqui ele para a operação quando encontrar o numero selecionado

    console.log(numero)
}