const express = require("express");
const router = express.Router();
const axios = require("axios");
const authenticateToken = require('../Middleware/middleware')
require('dotenv').config()

router.post("/create-task",authenticateToken, async (req, res) => {
  try {
    const response = await axios.post(`${process.env.TASK_SERVICE_URL}/api/task`, req.body);
    res.status(response.status).json({"message":response.message});
  } catch (error) {
    console.log(error)
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  }
});