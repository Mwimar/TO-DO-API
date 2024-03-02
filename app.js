const express = require("express");

const db = require("./data/database");

const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use("/todos", todoRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went Wrong!!",
  });
});

db.getDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to Database!!");
  });
