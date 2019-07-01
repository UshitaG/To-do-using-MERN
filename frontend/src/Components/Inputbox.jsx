import React, { Component } from "react";

class Inputbox extends Component {
  state = {
    inputText: ""
  };
  onChangeHandler = event => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Input
            </span>
          </div>
          <input
            value={this.state.inputText}
            onChange={this.onChangeHandler}
            type="text"
            className="form-control"
            placeholder="Your new task"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            this.props.onAdd(this.state.inputText);
            this.setState({ inputText: "" });
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default Inputbox;
