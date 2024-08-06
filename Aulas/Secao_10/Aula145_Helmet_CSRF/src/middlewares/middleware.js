exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Um teste'  
    next()
}

exports.outroMiddleware = (req, res, next) => {  
    next()
}

exports.checkCsrfError = (erro, req, res, next) => {
    if(erro && erro.code == 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}