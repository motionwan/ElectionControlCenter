const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//imports of routers
const userRouter = require("./routes/users/users.router");
// router imports ends here

const app = express();

// connect to mongodb server
//connect to mongodb`
const Connect = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/election_command_center")
    .then(() => {
      console.log("connected to mongodb");
    });
};
Connect();

// middle ware
app.use(express.json());
app.use(cors());

//routers middleware here

app.use("/users", userRouter);

// router middleware ends here

module.exports = app;
