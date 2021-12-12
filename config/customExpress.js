const express = require('express')
const bodyParser = require('body-parser')
const cosign = require('consign')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    
    cosign()
        .include('routes')
            .into(app)
    return app
}