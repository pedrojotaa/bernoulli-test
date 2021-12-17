const customExpress = require('./config/customExpress')
const connection = require('./database/connection')
const Tables = require('./database/table')
const PORT = 3000
const path = require('path')
const express = require('express')

connection.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso!')
        Tables.init(connection)
        
        const app = customExpress()
     
        app.use('/', express.static(path.join(__dirname, 'public')))
        app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
    }
})