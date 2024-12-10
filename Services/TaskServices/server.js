const express = require('express')
const cros = require('cors')
const connection = require('./Config/Database')
require('dotenv').config()

connection()

const app = express()

app.use(cros())

const port = process.env.PORT
app.listen(port,()=>{
    console.log("Taskservice is running in the http://localhost:5001")
})