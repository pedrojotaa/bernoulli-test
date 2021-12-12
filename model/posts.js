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
    }
}