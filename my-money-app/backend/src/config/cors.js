module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') // o middleware nao atende a req... e sim aplica os headers
    next() //middleware - responder ou dar a msn erro ou next para o proximo middleware - 
}