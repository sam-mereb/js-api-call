const express = require('express')
const DATA  = require('./data').DATA
const app = express()
const port = 3000

app.get('/accounts', (req, res) => {
    let status = req.query.status;
    let page = req.query.page - 1

    let responseData = DATA[status][page][0]
    res.json(responseData);

})

module.exports = app
