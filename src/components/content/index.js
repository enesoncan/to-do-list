import React, { Component } from "react";
import "./style.css";

class Content extends Component {
  handleDelete = index => {
    const { onDelete } = this.props;
    onDelete(index);
  };
  render() {
    const { list } = this.props;
    return list.map((item, index) => {
      return (
        <div className="list" key={index}>
          <span>{item}</span>
          <button
            className="delete-item"
            type="button"
            onClick={() => this.handleDelete(index)}
          >
            Sil
          </button>
        </div>
      );
    });
  }
}
export default Content;
