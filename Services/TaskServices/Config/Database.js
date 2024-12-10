const mongoose = require("mongoose");

const connection = async () => {
  try {
    const db_uri = process.env.TASK_DB_URI;
    console.log(db_uri);
    await mongoose
      .connect(db_uri)
      .then(() => {
        console.log("Task databse connected successfully");
      })
      .catch((error) => {
        console.log("error while connecting database");
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = connection