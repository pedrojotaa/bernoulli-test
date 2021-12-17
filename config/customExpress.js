const express = require('express')
const bodyParser = require('body-parser')
const cosign = require('consign')
const cookieParser = require('cookie-parser')
const cors = require('cors')

module.exports = () => {
    const app = express()

    app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true
    }))
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    
    cosign()
        .include('routes')
            .into(app)
    return app
}