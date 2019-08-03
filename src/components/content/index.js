import React, { Component } from "react";
import "./style.css";

import emptyList from "../../empty-list.jpg";

class Content extends Component {
  handleDelete = index => {
    const { onDelete } = this.props;
    onDelete(index);
  };
  render() {
    const { list } = this.props;
    if (list.length > 0) {
      return list.map((item, index) => {
        return (
          <div className="list" key={index}>
            <span>{item}</span>
            <button
              className="delete-item"
              type="button"
              onClick={() => this.handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      });
    } else {
      return (
        <div className="empty-list">
          <img src={emptyList} alt="empty" />
          <p>Your list is empty. Enjoy :)</p>
        </div>
      );
    }
  }
}
export default Content;
