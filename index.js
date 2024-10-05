const express = require("express");
const database = require("./config/database");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const routesApiVer1 = require("./api/v1/routes/index.route");


routesApiVer1(app);
//Routes Version 1
database.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
