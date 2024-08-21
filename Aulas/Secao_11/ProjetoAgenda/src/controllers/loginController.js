const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('logado')
    res.render('login')
}

exports.criar = async (req, res) => {
    try {
        const login = new Login(req.body) //instancia a importação do Login e pega os dados do body
        await login.criar()
    
        if(login.erros.length > 0) {
            req.flash('erros', login.erros) // exibir as mensagens de erros
            req.session.save(function() {
                return res.redirect('/login') // caso tenha algum erro redireciona para a pagina que esta entre parenteses
            })
            return
        }
    
        req.flash('success', 'Seu usuario foi criado com sucesso')
        req.session.save(function() {
            return res.redirect('/login')
        })
    } catch(e) {
        console.log(e)
        return res.render('404')
    }

}

exports.entrar = async (req, res) => {
    try {
        const login = new Login(req.body) //instancia a importação do Login e pega os dados do body
        await login.entrar()
    
        if(login.erros.length > 0) {
            req.flash('erros', login.erros) // exibir as mensagens de erros
            req.session.save(function() {
                return res.redirect('/login') // caso tenha algum erro redireciona para a pagina que esta entre parenteses
            })
            return
        }
    
        req.flash('success', 'Seu usuario foi logado com sucesso')
        req.session.user = login.user // sessao que identifica o usuario
        req.session.save(function() {
            return res.redirect('/login/logado')
        })
    } catch(e) {
        console.log(e)
        return res.render('404')
    }

}

exports.logado = (req, res) => {
    res.render('logado')
}

exports.sair = (req, res) => {
    req.session.destroy() // desloga o usuario
    res.redirect('/') // retorna a pagina home
}