class Tabela {
    init(connection){
        this.connection = connection

        this.createTable()
    }

    createTable(){
        const sql = `create table if not exists cadastro (
            id int primary key not null auto_increment,
            email varchar(50) not null,
            password varchar(20) not null
        )`

        this.connection.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Cadastro criado com sucesso!')
            }
        })
    }
}

module.exports = new Tabela