const mongoose = require('mongoose')
const dotenv  = require('dotenv')

dotenv.config({path:'./config.env'})

const connection = async ()=>{
    try {
        console.log(process.env.PORT)
        const uri = process.env.DB_URI;
        console.log("uri : ",uri)
        await mongoose.connect(uri)
        .then(()=>{
            console.log("connect to the Database successfully")
        })
        .catch((error)=>{
            console.log("error in connecting Database")
            console.log(error)
        })
    } catch (error) {
        console.log("error occured")
        console.log(error)
        process.exit(1);
    }
}
module.exports = connection