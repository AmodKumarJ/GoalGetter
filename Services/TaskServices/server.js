const express = require('express')
const cros = require('cors')
const connection = require('./Config/Database')
require('dotenv').config()
const TaskRoutes = require('./TaskRoutes/TaskRoutes') 

connection()

const app = express()
app.use(express.json());
app.use(cros())

app.use("/api",TaskRoutes)


const port = process.env.PORT
app.listen(port,()=>{
    console.log("Taskservice is running in the http://localhost:5001")
})