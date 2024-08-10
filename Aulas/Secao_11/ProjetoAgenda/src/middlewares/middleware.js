exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Um teste'  
    next()
}

exports.checkCsrfError = (erro, req, res, next) => {
    if(erro) {
        return res.render('404') //caso aconteca qualquer erro, renderize a pagina 404
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}