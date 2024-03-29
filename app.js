const express = require("express");

const db = require("./data/database");

const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went Wrong!!",
  });
});

db.initDb()
  .then(function () {
    // console.log("Database connected successfully!");
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to Database!!");
  });
