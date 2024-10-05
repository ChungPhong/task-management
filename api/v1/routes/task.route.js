const express = require("express");
const router = express.Router();
const Task = require("../../../model/task.model");

const paginationHelpers = require("../../../helpers/pagination");
const searchHelper = require("../../../helpers/search");

// const controller = require("../../controller/admin/role.controller");

// [GET] /api/v1/tasks
router.get("/", async (req, res) => {
  const find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  //SEARCH
  const objectSearch = searchHelper(req.query);
  if (req.query.keyword) {
    find.title = objectSearch.regex;
  }

  //END SEARCH

  //PAGINATION
  let initPagination = {
    currentPage: 1,
    limitPage: 3,
  };
  const countTask = await Task.countDocuments(find);
  const objectPagination = paginationHelpers(
    initPagination,
    req.query,
    countTask
  );
  //END PAGINATION

  //SORT
  const sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  }
  //END SORT

  const tasks = await Task.find(find)
    .sort(sort)
    .limit(objectPagination.limitPage)
    .skip(objectPagination.skip);
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
