const express = require("express");
const router = express.Router();
const Task = require("../../../model/task.model");

// const controller = require("../../controller/admin/role.controller");

router.get("/", async (req, res) => {
  const tasks = await Task.find({
    deleted: false,
  });
  console.log(tasks);
  res.json(tasks);
});

router.get("/details/:id", async (req, res) => {
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
module.exports = router;
