const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors') //conexoes dif origens
const queryParser = require('express-query-int') // para nao dar problm nos valores das queries

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND IS RUNNING ON PORT  ${port} .`)
})

module.exports = server