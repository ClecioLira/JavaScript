const Login = require('../models/LoginModel');

exports.index = (req, res) => {
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