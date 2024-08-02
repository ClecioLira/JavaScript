exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">  
        Nome: <input type="text" name="nome">
        Outro Campo: <input type="text" name="outroCampo">
        <button>Enviar Form</button>
        </form>  
    `)
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST')
}