const express = require("express");
const database = require("./config/database");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

database.connect();

const Task = require("./model/task.model");

app.get("/task", async (req, res) => {
  const tasks = await Task.find({
    deleted: false,
  });
  console.log(tasks);
  res.json(tasks);
});

app.get("/task/details/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({
      deleted: false,
      _id: id,
    });
    console.log(task);
    res.json(task);
  } catch (error) {
    res.json("Không tìm thấy trang web");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
