const express = require("express");
const router = express.Router();
const Task = require("../../../model/task.model");

const controller = require("../controllers/task.controller");
router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

router.patch("/change-status/:id", controller.changeStatus);
router.patch("/change-multi", controller.changeMulti);

router.post("/create", controller.create);

router.delete("/delete/:id", controller.delete);
router.delete("/delete-multi", controller.deleteMulti);

module.exports = router;
