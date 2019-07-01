var express = require("express");
var bodyparser = require("body-parser");
var { ObjectId } = require("mongodb");
var cors = require("cors");

var { mongoose } = require("./database/mongoose");
var { Todo } = require("./todosch");

var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/todo/add", (req, res) => {
  //console.log()
  var todo = new Todo({
    text: req.body.text,
    createdAt: Date.now()
  });
  todo.save().then(
    c => {
      res.send(c);
    },
    e => {
      res.status(400).send(e);
      console.log(e);
    }
  );
});

app.get("/todo/show", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todo/id", (req, res) => {
  if (!ObjectId.isValid(req.body._id)) {
    return res.status(400).send("invalid id");
  }
  Todo.findById(req.body._id).then(
    todo => {
      if (!todo) {
        return res.send("id not found");
      }
      res.send(todo);
    },
    e => {
      res.send(e);
    }
  );
});

app.delete("/todo/delete/id", (req, res) => {
  if (!ObjectId.isValid(req.body.id)) return res.status(400).send("invalid id");
  Todo.findByIdAndDelete(req.body.id).then(
    todo => {
      if (!todo) return res.send("id not found");
      res.send(todo);
    },
    e => {
      res.send(e);
    }
  );
});

app.patch("/todo/update/id", (req, res) => {
  if (!ObjectId.isValid(req.body.id)) return res.status(400).send("invalid id");
  Todo.findByIdAndUpdate(
    req.body.id,
    {
      $set: {
        completed: req.body.completed,
        completedAt: Date.now()
      }
    },
    {
      new: true
    }
  ).then(
    todo => {
      if (!todo) return res.send("no id found");
      res.send(todo);
    },
    e => {
      res.status(404), send(e);
    }
  );
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
