const express = require("express");
const router = express.Router();
const axios = require("axios");
const authenticateToken = require('../Middleware/middleware')
require('dotenv').config()

router.post("/create-task",authenticateToken, async (req, res) => {
  try {
    console.log(process.env.TASK_SERVICE_URL)
    const response = await axios.post(`${process.env.TASK_SERVICE_URL}/api/task`, req.body);
    res.status(response.status).json({"message":response.message});
  } catch (error) {
    console.log(error)
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  }
});
router.get("/user-task/:uid",authenticateToken, async (req, res) => {
  try {
    const {uid} = req.params;
    const response = await axios.get(`${process.env.TASK_SERVICE_URL}/api/tasks/${uid}`);
    res.status(response.status).json({"message":response.message,data:response.data});
  } catch (error) {
    console.log(error)
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  } 
});

router.delete("/task/:t_id",authenticateToken, async (req, res) => {
  try {
    const {t_id} = req.params;
    const response = await axios.delete(`${process.env.TASK_SERVICE_URL}/api/task/${t_id}`);
    res.status(response.status).json({"message":response.message});
  } catch (error) {
    console.log(error)
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  }
});



router.post("/task_status/:id",authenticateToken, async (req, res) => {
  try {
    const {id} = req.params;
    const response = await axios.post(`${process.env.TASK_SERVICE_URL}/api/status/${id}`);
    res.status(response.status).json({"message":response.message});
  } catch (error) {
    console.log(error)
    res.status(error.response?.status || 500).send(error.response?.data || "Internal Server Error");
  }
});

module.exports = router