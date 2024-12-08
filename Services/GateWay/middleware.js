const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../config.env'})

const secret_key = process.env.SECRET_KEY || 12498050

const authenticateToken = (req,res,next)=>{
    const token = req.header.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized access' });

  try {
    const decoded = jwt.verify(token, secret_key);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
}
module.exports = authenticateToken;