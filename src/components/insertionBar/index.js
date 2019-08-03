import React, { Component } from "react";
import "./style.css";

class InsertionBar extends Component {
  handleClick = e => {
    e.preventDefault();
    let value = this.input.value;
    const { add } = this.props;
    add(value);
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      let value = this.input.value;
      const { add } = this.props;
      add(value);
    }
  };

  render() {
    return (
      <div className="insertion-bar">
        <input
          type="text"
          placeholder="Add New Item"
          ref={c => (this.input = c)}
          onKeyDown={this.handleKeyDown}
        />
        <button type="button" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}
export default InsertionBar;
