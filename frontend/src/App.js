import React, { Component } from "react";
import Tasks from "./Components/Tasks";
import Inputbox from "./Components/Inputbox";
const axios = require("axios");

class App extends Component {
  state = {
    tasks: []
  };
  componentDidMount() {
    this.showtasksfromdb();
  }
  showtasksfromdb = () => {
    axios
      .get("http://localhost:5000/todo/show")
      .then(res => {
        //console.log(res);
        this.setState({ tasks: res.data.todos });
      })
      .catch(e => {
        console.log("error happened", e);
      });
  };
  onAddHandler = newjob => {
    axios
      .post("http://localhost:5000/todo/add", { text: newjob })
      .then(res => {
        console.log(res);
        this.showtasksfromdb();
      })
      .catch(e => {
        console.log("error happened", e);
      });
  };
  onUpdateHandler = (Id, status) => {
    axios
      .patch("http://localhost:5000/todo/update/id", {
        id: Id,
        completed: status
      })
      .then(res => {
        this.showtasksfromdb();
        alert("Update done");
      })
      .catch(e => {
        console.log("error happened", e);
      });
  };
  onRemoveHandler = Id => {
    axios
      .delete("http://localhost:5000/todo/delete/id", {
        data: {
          id: Id
        }
      })
      .then(res => {
        this.showtasksfromdb();
        console.log(res);
        alert("Deleted the task :   " + res.data.text);
      })
      .catch(e => {
        console.log("Error in deleting", e);
      });
  };
  render() {
    return (
      <div className="container col-md-6 col-centered">
        <center>
          <h1>TO DO LIST</h1>
          <Inputbox onAdd={this.onAddHandler} />
          <Tasks
            tasks={this.state.tasks}
            onUpdate={this.onUpdateHandler}
            onRemove={this.onRemoveHandler}
          />
        </center>
      </div>
    );
  }
}
export default App;
