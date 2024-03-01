const db = require("../data/database");
const mongodb = require("mongodb");

class Todo {
  constructor(text, id) {
    this.text;
    this.id;
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
}

module.exports = Todo;
