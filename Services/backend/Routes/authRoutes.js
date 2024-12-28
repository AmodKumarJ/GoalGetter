const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authServices = require('../services/authServices')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const router = express.Router();
const secret_key = process.env.SECRET_KEY || 12498050
console.log(process.env.SECRET_KEY)
router.post('/signup',async (req,res) => {
    const username = req.body.username
    const pass = req.body.password
    const email = req.body.email

    try {
        const userExits = await authServices.findUserById(username)
        if (userExits) {
            return res.status(400).json({message:'User Already Exits'})
        }
        const emailExits = await authServices.findUserByEmail(email);
        if (emailExits) {
            return res.status(400).json({message:'Email Already Exits'})
        }
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(pass, salt);
        const new_user = await authServices.createUser({username,password,email}) 
        if (new_user) {
            
            return res.status(201).json({message: 'User created successfully',userDetails:{id:new_user._id,username:new_user.username}})
        }
        else{
            return req.status(400).json({message:'User creation failed'})
        }
        
    } catch (error) {
        console.log("error : ",error)
        res.status(500).json({ message: 'Server error' });
    }

})

router.post('/signin',async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    try {
        const user = await authServices.findUserById(username)
        if (!user) {
            return res.status(404).json('user is not found')
        }
        const isMatch = await authServices.verfyPassword(password,user.password)
        if (!isMatch) {
            return res.status(401).json({message:'Invalid Credential'})
        }
       
        const userdetails = await authServices.findUserById(username)
        res.status(200).json({message:'sign in successfully ',userdetails:{id:userdetails._id,username:userdetails.username}})
    } catch (error) {
        console.log('error : ',error)
        res.status(500).json({message:'server error'})
    }
})



module.exports = router;