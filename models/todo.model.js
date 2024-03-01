const db = require("../data/database");

class Todo {
  constructor(text) {
    this.text;
  }
  save() {
    return db.getDb().collection("todos").insertOne({ text: this.text });
  }
}

module.exports = Todo;
