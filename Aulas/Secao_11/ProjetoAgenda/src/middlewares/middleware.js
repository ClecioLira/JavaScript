exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros') 
    res.locals.success = req.flash('success') 
    res.locals.user = req.session.user
    next()
}

exports.outroMiddleware = (req, res, next) => {  
    next()
}

exports.checkCsrfError = (erro, req, res, next) => {
    if(erro) {
        return res.render('404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('erros', 'Você precisa fazer o login.')
        req.session.save(function() {
            res.redirect('/')
        })
        return
    }
    next()
}