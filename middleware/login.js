const jwt = require('jsonwebtoken')

exports.obrigatorio = (req, res, next) => {
    
    try{
        
        const token = req.headers.authorization.split(' ')[1]
        //decoded é o token decodificado
        const decoded = jwt.verify(token, process.env.JWT_KEY)
    
        req.usuario = decoded
    
        next()
    }catch (erro){
        return res.status(401).send({ menssagem: 'Falha na Autenticação' })
    }
}

exports.opicional = (req, res, next) => {
    
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
    
        req.usuario = decode
    
        next()
    }catch (erro){
        next()
    }
}