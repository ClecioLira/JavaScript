const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descricao de testes'
})
    .then(dados => console.log(dados))
    .catch(err => console.error(err))

exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}