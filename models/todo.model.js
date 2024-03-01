const db = require("../data/database");
const mongodb = require("mongodb");

class Todo {
  constructor(text, id) {
    this.text;
    this.id;
  }

  static async getAllTodos() {
    const todoDocuments = await db.getDb().collection("todos").find().toArray();
    return todoDocuments.map(function (todoDocument) {
      return new Todo(todoDocuments._id, todoDocuments.text);
    });
  }

  save() {
    if (this.id) {
      const todoId = new mongodb.ObjectId(this.id);
      return db
        .getDb()
        .collection("todos")
        .updateOne({ _id: todoId }, { $set: { text: this.text } });
    } else {
      return db.getDb().collection("todos").insertOne({ text: this.text });
    }
  }

  delete() {
    if (!this.id) {
      throw new Error("Trying to delete quote without Id!!");
    }
    const todoId = new mongodb.ObjectId(this.id);
    return db.getDb().collection("todos").deleteOne({ _id: todoId });
  }
}

module.exports = Todo;
