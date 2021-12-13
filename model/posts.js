const connection = require('../database/connection')

module.exports = {
    add(dados, res){

        const sql = 'insert into cadastro set ?'

        connection.query(sql, dados, (erro, resultado) => {
    
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({dados})
            }
        })
    },

    login(email, password, res){

        const sql = 'select * from cadastro where email = ?'

        connection.query(sql, email, (erro, resultado) => {
            
            if(erro){
                return res.send(500).send({ mensagem: 'Falha na Autenticação' })
            }
            if(resultado < 1){
                return res.status(401).send({ mensagem: 'Falha na Autenticação' })
            }
            if(password == resultado[0].password){
                return res.status(200).send({ mensagem: 'Autenticado com sucesso' })
            }
                return res.status(401).send({ mensagem: 'Falha na Autenticação' })
           /*  if(req)
            bcrypt.compare(req.body.password, resultado[0].password, (erro, resultado) => {
                
                if(erro){
                    return res.status(401).send({ mensagem: 'Falha na err2' })
                }
                if(resultado){
                    return res.status(200).send({ mensagem: 'Autenticado com sucesso' })
                }
                return res.status(401).send({ mensagem: 'Falha total' })
            }) */
            
        })
    }
}