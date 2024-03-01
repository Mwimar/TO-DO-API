const Todo = require("../models/todo.model");

async function getAllTodos(req, res, next) {
  let todos;
  try {
    todos = await Todo.getAllTodos();
  } catch (error) {
    return next(error);
  }
  res.json({
    todos: todos,
  });
}

function addTodo(req, res, next) {}

function updateTodo(req, res, next) {}

function deleteTodo(req, res, next) {}

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
