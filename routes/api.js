const Posts = require('../model/posts')
const login = require('../middleware/login')

module.exports = app => {
    app.post('/cadastro', (req, res) => {

        const dados = req.body

        Posts.cadastro(dados, res)

    })

    app.post('/login', (req, res) => {
     
        const email = req.body.email
        const password = req.body.password

        Posts.login(email, password, res)

    })

    app.get('/lista',login.obrigatorio, (req, res) => {
        console.log(req.usuario)
        Posts.lista(res)

    })
}