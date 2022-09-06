const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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

module.exports = app;
