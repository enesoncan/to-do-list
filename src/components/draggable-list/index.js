import React, { Component } from "react";
import { reorderPosition } from "../../utils/array";
import "./style.css";

import emptyList from "../../empty-list.jpg";

class DraggableList extends Component {
  constructor(props) {
    super(props);
    const { list } = this.props;

    this.listContainerRef = React.createRef();
    this.listOfListItemRefs = list.map(listItem => React.createRef());
    this.clickDiff = 0;
  }

  // Delete Function
  handleDelete = index => {
    const { onDelete } = this.props;
    onDelete(index);
  };

  handleDragStart = ({ index, event }) => {
    const currentItemRef = this.listOfListItemRefs[index];
    const currentItemOffsetTop = currentItemRef.current.offsetTop;
    const cursorClientY = event.clientY;
    const clickDiff = cursorClientY - currentItemOffsetTop;
    this.dragStartTopPosition = currentItemOffsetTop;
    this.clickDiff = clickDiff;

    // console.log('Drag Start Top Offset', currentItemOffsetTop);
    // console.log('clickDiff', clickDiff);
  };

  handleDragEnd = ({ index, event }) => {
    console.log("index", index);
    const currentItemRef = this.listOfListItemRefs[index];
    const dragEndTopPosition = event.clientY - this.clickDiff;
    // console.log('Drag End Offset Position: ', dragEndPosition);
    // console.log('Drag End Top Offset Position: ', dragEndTopPosition);

    const movementDiff = dragEndTopPosition - this.dragStartTopPosition;
    // console.log('movementDiff', movementDiff);
    const itemHeight = currentItemRef.current.offsetHeight;
    // console.log('itemHeight', itemHeight);
    const positionDiff = Math.floor(movementDiff / itemHeight);
    console.log("positionDiff", positionDiff);

    const { list } = this.props;
    console.log("list", list);

    let targetIndex = index + positionDiff;

    if (targetIndex >= list.length - 1) {
      targetIndex = list.length - 1;
    }
    if (targetIndex < 0) {
      targetIndex = 0;
    }

    console.log("targetIndex", targetIndex);
    const { onChange } = this.props;
    const newList = reorderPosition(index, targetIndex, list);
    console.log("newList", newList);
    onChange(newList);
  };

  render() {
    // console.log(this.state.tasks);
    const { list, filterText } = this.props;

    return list.length > 0 ? (
      <div ref={this.listContainerRef} className="listWrapper">
        {list
          .filter(item => {
            return item.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
          })
          .map((item, index) => {
            return (
              <div
                className="list-item"
                draggable
                key={index}
                ref={this.listOfListItemRefs[index]}
                onDragStart={event => this.handleDragStart({ index, event })}
                onDragEnd={event => this.handleDragEnd({ index, event })}
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
          })}
      </div>
    ) : (
      <div className="empty-list">
        <img src={emptyList} alt="empty" />
        <p>Your list is empty. Enjoy :)</p>
      </div>
    );
  }
}
export default DraggableList;
