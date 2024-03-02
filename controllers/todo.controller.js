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

async function addTodo(req, res, next) {
  const todoText = req.body.text;
  let todo;
  todo = new Todo(todoText);
  let insertedId;
  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  } catch (error) {
    return next(error);
  }
  todo.id = insertedId.toString();
  res.json({ message: "added todo Successfully!", createdTodo: todo });
}

async function updateTodo(req, res, next) {
  const todoId = req.params.id;
  const newTodoText = req.body.newText;

  const todo = new Todo(newTodoText, todoId);

  try {
    await todo.save();
  } catch (error) {
    return next(error);
  }
  res.json({ message: "todo updated successfully", Updatedtodo: todo });
}

async function deleteTodo(req, res, next) {
  const todoId = req.params.id;

  const todo = new Todo(null, todoId);

  try {
    await todo.delete();
  } catch (error) {
    return next(error);
  }
  res.json({ message: "todo deleted", Updatedtodo: todo });
}

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
