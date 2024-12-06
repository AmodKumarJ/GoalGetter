const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema(
    {
        username : {type:String,required:true},
        password : {type:String,required:true},
        email :{type:String,required:true,unique:true},
    }
)

const User = mongoose.model('User',userSchema)
module.exports = User