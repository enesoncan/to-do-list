import React, { Component } from "react";
import "./style.css";

import emptyList from "../../empty-list.jpg";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  componentWillReceiveProps() {
    const { list } = this.props;
    this.setState({
      tasks: list
    });
  }

  // Drag & Drop Functions
  onDragStart = (event, idx) => {
    console.log("dragElement", idx);
    event.dataTransfer.setData("id", idx);
  };

  onDragOver = () => {
    const { onDragOver } = this.props;
    onDragOver();
  };

  onDrop = () => {
    const { onDrop } = this.props;
    onDrop();
  };

  // Delete Function
  handleDelete = index => {
    const { onDelete } = this.props;
    onDelete(index);
  };

  render() {
    // console.log(this.state.tasks);
    const { list, filterText } = this.props;
    if (list.length > 0) {
      return list
        .filter(item => {
          return item.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        })
        .map((item, index) => {
          return (
            <div
              className="list"
              onDragStart={e => this.onDragStart(e, index)}
              draggable
              id={`task${index}`}
              key={index}
            >
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
