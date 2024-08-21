const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {} // envia um contato fake para nao dar erro de contato is not defined
    })
}

exports.criar = async (req, res) => {
    try {
        const contato = new Contato(req.body)
        await contato.criar()
        
        if(contato.erros.length > 0) {
            req.flash('erros', contato.erros)
            req.session.save(() => {
                res.redirect('/contato/')
            })
            return
        }
    
        req.flash('success', 'Contato registrado com sucesso')
        req.session.save(() => {
            res.redirect(`/contato/${contato.contato._id}`) // redireciona para a pagina com os dados do contato cadastrado
        })
        return
    } catch (e) {
        return res.render('404')
    }
}

exports.editIndex = async (req, res) => {
    if(!req.params.id) return res.render('404') // se nao existir o id ele vai mandar para a pagina 404

    const contato = await Contato.buscaPorId(req.params.id)

    if(!contato) return res.render('404') // se o usuario nao existir renderizar a pagina 404

    res.render('contato', {contato})
}