const express = require("express");

const todosController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", todosController.getAllTodos);

module.exports = router;
