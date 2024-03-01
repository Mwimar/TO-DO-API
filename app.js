const express = require("express");

const db = require("./data/database");

const app = express();

db.getDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to Database!!");
  });
