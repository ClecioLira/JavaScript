import app from './app' // pega a class App

const port = 3001 // cria numeracao da porta
app.listen(port, () => { // fica escutando a porta 3001
  console.log()
  console.log(`Escutando na porta: ${port}`)
  console.log(`http://localhost:${port}`)
})
