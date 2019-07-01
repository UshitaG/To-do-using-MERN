import React, { Component } from "react";

class Task extends Component {
  state = {
    status: this.props.task.completed
  };
  onChangeStatusHandler = event => {
    this.setState({ status: event.target.value });
  };
  colourChanger = () => {
    if (this.props.task.completed === true) return "lightgreen";
    return "white";
  };
  render() {
    return (
      <div>
        <li
          style={{
            backgroundColor: this.colourChanger(),
            margin: 10,
            width: 500
          }}
        >
          <span> {this.props.task.text} </span>
          <select
            style={{ margin: 5 }}
            onChange={this.onChangeStatusHandler}
            value={this.state.status}
          >
            <option value="true">YES</option>
            <option value="false">NO </option>
          </select>
          <button
            onClick={() => {
              this.props.onUpdate(this.props.task._id, this.state.status);
            }}
          >
            Update
          </button>
          <button onClick={() => this.props.onRemove(this.props.task._id)}>
            Delete
          </button>
        </li>
      </div>
    );
  }
}
export default Task;
