const User = require('../Model/User')
const bcrypt = require('bcrypt')


exports.findUserById = async (username) => {
  return await User.findOne({username})  
}

exports.findUserByEmail = async (email) => {
  return await User.findOne({email})  
}

exports.createUser = async ({username,password,email}) => {
    const user = new User({username,password,email})
    console.log(user)
    await user.save()
    return user
}

exports.verfyPassword = async (userpass,dbpass) => {
    return await bcrypt.compare(userpass,dbpass)
}
