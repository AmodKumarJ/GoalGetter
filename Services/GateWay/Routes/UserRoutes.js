const express = require("express");
const router = express.Router();
const axios = require("axios");
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Forward requests to user-service
router.post("/login", async (req, res) => {
  try {
    
    const response = await axios.post(`${process.env.USER_SERVICE_URL}/auth/signin`, req.body);
    const token = jwt.sign({username:req.body.username},secret_key,{expiresIn:'1h'})
    req.session.user = {username:req.body.username}
    res.status(response.status).json({"userdata":response.data,"token":token});
  } catch (error) {
    console.log(error)
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  }
});

router.post("/register", async (req, res) => {
  try {
    const response = await axios.post(`${process.env.USER_SERVICE_URL}/auth/signup`, req.body);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  }
});
router.post('/logout',(req,res) => {
  req.session.destroy((err)=>{
      if (err) {
          return res.status(500).json({message:'Logout Failed'})
      }
      res.status(200).json({message:'Logout Successfull'})
  })
})

module.exports = router;

