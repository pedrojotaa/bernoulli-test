const Posts = require('../model/posts')
const login = require('../middleware/login')
const bcrypt = require('bcrypt')

module.exports = app => {
    app.post('/cadastro', async (req, res) => {

        try{

            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const user = { email: req.body.email, password: hashedPassword }

            Posts.cadastro(user, res)

        }catch{

            res.status(500).send()
          
        }
        
    })

    app.post('/login', async (req, res) => {
     
        const user = { email: req.body.email, password: req.body.password }

        Posts.login(user, res)

    })

    app.get('/lista',login.obrigatorio, (req, res) => {
        console.log(req.usuario)
        Posts.lista(res)

    })
}