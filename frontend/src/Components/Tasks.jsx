import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(task => (
            <Task
              key={task._id}
              task={task}
              onUpdate={this.props.onUpdate}
              onRemove={this.props.onRemove}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Tasks;
