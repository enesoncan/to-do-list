import React from "react";
import "./App.css";

import InsertionBar from "./components/insertionBar";
import Content from "./components/content";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: ["test", "example", "tutorial"],
      filterText: ""
    };
  }

  handleDelete = index => {
    const { list } = this.state;
    let deleteItem = list;
    deleteItem.splice(index, 1);

    this.setState({
      list: deleteItem
    });
  };

  addItem = value => {
    const { list } = this.state;
    const addItem = value;

    if (addItem.length > 0) {
      this.setState({
        list: [...list, addItem]
      });
    }
  };

  handleFilter = e => {
    let val = e.target.value;

    this.setState({
      filterText: val
    });
  };

  handleDragOver = event => {
    event.preventDefault();
  };

  handleDrop = event => {
    console.log("dropped");
    let id = event.dataTransfer.getData("id");

    let arr = this.state.list;
    arr.prototype.move = function(from, to) {
      this.splice(to, 0, this.splice(from, id)[0]);
    };
  };
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search In The List"
              onChange={e => this.handleFilter(e)}
            />
          </div>
          <InsertionBar add={this.addItem} />
        </div>
        <div
          className="app-content"
          onDragOver={e => this.handleDragOver(e)}
          onDrop={e => this.handleDrop(e)}
        >
          <Content
            list={this.state.list}
            onDelete={this.handleDelete}
            filterText={this.state.filterText}
            onDragOver={this.handleDragOver}
            onDrop={this.handleDrop}
          />
        </div>
      </div>
    );
  }
}

export default App;
