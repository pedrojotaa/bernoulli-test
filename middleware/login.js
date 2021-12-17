const jwt = require('jsonwebtoken')

exports.obrigatorio = (req, res, next) => {
    
    try{
        const token = req.headers.authorization.split(' ')[1]
        //decoded é o token decodificado
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)
    
        req.usuario = decoded
    
        next()
    }catch (erro){
        return res.status(401).send({ menssagem: 'Falha na Autenticação' })
    }
}

exports.opicional = (req, res, next) => {
    
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN)
    
        req.usuario = decode
    
        next()
    }catch (erro){
        next()
    }
}

exports.cookie = (req, res, next) => {
    
    const token = req.cookies.cookie_token;
    console.log(token)
    if (!token) {
      return res.sendStatus(403);
    }
    try {
      const data = jwt.verify(token, process.env.ACCESS_TOKEN);
      
      req.userId = data.id;
      req.userRole = data.role;
      console.log(data.id)
      return next();
    } catch {
      return res.sendStatus(403);
    }

}