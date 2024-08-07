exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros') 
    res.locals.success = req.flash('success') 
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