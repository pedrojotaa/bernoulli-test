const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const connection = require('../database/connection')

module.exports = {
    cadastro(user, res){

        const sql = 'insert into cadastro set ?'

        connection.query(sql, user, (err, resultado) => {
    
            if(err){
                res.status(400).json(err)
            }else{
                res.status(200).json(user)
            }
        })
    },

    login (user, res){

        const sql = 'select * from cadastro where email = ?'

        connection.query(sql, [user.email], async (err, resultado) => {
                if(err){
                    return res.send(500).send({ mensagem: 'Erro' })
                }
                if(resultado < 1 ){
                    return res.status(401).send({ mensagem: 'Usuario nao encontrado' })
                }
            try{
                if(await bcrypt.compare(user.password, resultado[0].password)){
                    const token = jwt.sign({
                        id: resultado[0].id,
                        email: resultado[0].email
                    },
                        process.env.ACCESS_TOKEN,
                        {
                            expiresIn: "1h"
                        })
                        
                    res
                    .cookie('cookie_token', token, {
                        httpOnly: true,
                        //secret: true
                    })
                    res
                    .status(200)
                    .send({ mensagem: 'Logado com sucesso' })
                }else{
                    res.status(401).send({ mensagem: 'Não Permitido' })
                }
            }catch(err){
                res.status(401).send()
            }
            })
        },
    
    lista(res){
        
        const sql = 'select * from cadastro'
    
        connection.query(sql, (erro, resposta) => {
        
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({mensagem: 'Pode Buscar'})
            }
        })
    }
}