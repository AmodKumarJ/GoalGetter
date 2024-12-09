const dbConnection = require('./Config/database')
const express = require('express')
const dotenv = require('dotenv')
const session = require('express-session');
const authRoutes = require('./Routes/authRoutes')
const cors = require('cors')
dotenv.config({path:'./config.env'})
const app = express()

//calling the database connection
dbConnection()
secret_key = process.env.SECRET_KEY 
app.use(express.json())


app.use(cors())
app.use('/auth',authRoutes)
const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("server is running in port 5000")
})