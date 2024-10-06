const express = require("express");
const router = express.Router();
const Task = require("../../../model/task.model");

const controller = require("../controllers/task.controller");
router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

router.patch("/change-status/:id", controller.changeStatus);
module.exports = router;
