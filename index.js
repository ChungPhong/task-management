const express = require("express");
const database = require("./config/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const routesApiVer1 = require("./api/v1/routes/index.route");
const app = express();
const port = process.env.PORT;
//Cài đặt Cors này vào dùng để chia sẻ tài nguyên fe và be chéo nhau
app.use(cors());
database.connect();

// parse application/json
app.use(bodyParser.json());

//Cookie
app.use(cookieParser());
//Routes Version 1
routesApiVer1(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
