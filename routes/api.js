const Posts = require('../model/posts')

module.exports = app => {
    app.post('/cadastro', (req, res) => {

        const dados = req.body

        Posts.add(dados, res)

    })
}