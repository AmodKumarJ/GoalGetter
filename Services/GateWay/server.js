
const express = require('express')
const dotenv = require('dotenv')
const session = require('express-session');
const cors = require('cors')
const app = express()
const userRoutes =require('./Routes/UserRoutes')

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))

secret_key = process.env.JWT_SECRET || 12498050 
app.use(
  session({
      secret: secret_key,
      resave:false,
      saveUninitialized:false,
      cookie:{secure:false,maxAge:3600000}
  })
)
//calling the database connection
app.use(express.json());
app.use(require("./Middleware/loggingMiddleware")); // Log all requests
app.use("/users", userRoutes);
// app.use("/tasks", taskRoutes);
// app.use("/notifications", notificationRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`);
});