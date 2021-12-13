const Posts = require('../model/posts')

module.exports = app => {
    app.post('/cadastro', (req, res) => {

        const dados = req.body

        Posts.add(dados, res)

    })

    app.post('/login', (req, res) => {

        const email = req.body.email
        const password = req.body.password

        Posts.login(email, password, res)

    })
}