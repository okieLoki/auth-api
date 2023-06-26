require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/db')
const authUserRoute = require('./routes/authUserRoute')
const demoRoute = require('./routes/demoRoute')

dbConnect()

const server = express()
server.use(express.json())

server.use('/', authUserRoute)
server.use('/demo', demoRoute)

module.exports = server