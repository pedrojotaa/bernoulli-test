const connection = require('../database/connection')
const jwt = require('jsonwebtoken')

module.exports = {
    cadastro(dados, res){

        const sql = 'insert into cadastro set ?'

        connection.query(sql, dados, (erro, resultado) => {
    
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(dados)
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
                const token = jwt.sign({
                    id: resultado[0].id,
                    email: resultado[0].email
                },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    })
                return res.status(200).send({ 
                    mensagem: 'Autenticado com sucesso',
                    token: token
                 })
            }
                return res.status(401).send({ mensagem: 'Falha na Autenticação' })
        })
    },
    
    lista(res){

        const sql = 'select * from cadastro'

        connection.query(sql, (erro, resposta) => {

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resposta)
            }

        })
    }


}