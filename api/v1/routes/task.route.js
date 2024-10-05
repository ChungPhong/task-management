const express = require("express");
const router = express.Router();
const Task = require("../../../model/task.model");

// const controller = require("../../controller/admin/role.controller");

// [GET] /api/v1/tasks
router.get("/", async (req, res) => {
  const find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }
  
  console.log(req.query);
  const tasks = await Task.find(find);
  res.json(tasks);
});

// [GET] /api/v1/tasks/detail/:id
router.get("/details/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({
      deleted: false,
      _id: id,
    });
    res.json(task);
  } catch (error) {
    res.json("Không tìm thấy trang web");
  }
});
module.exports = router;
