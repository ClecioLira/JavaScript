exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Um teste'  
    next()
}

exports.outroMiddleware = (req, res, next) => {  
    next()
}
