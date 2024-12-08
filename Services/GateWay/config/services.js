module.exports = {
    userService: process.env.USER_SERVICE_URL || "http://localhost:3001",
    taskService: process.env.TASK_SERVICE_URL || "http://localhost:3002",
    notificationService: process.env.NOTIFICATION_SERVICE_URL || "http://localhost:3003",
  };
  