import React from "react";
import "./App.css";

import InsertionBar from "./components/insertionBar";
import DraggableList from "./components/draggable-list";
import FilterInput from "./components/filter-input";
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

  listOrderChange = newList => {
    console.log("newList", newList);
    this.setState({
      list: newList
    });
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
        <Content>
          {() => (
            <div>
              <div className="app-header">
                <FilterInput onChange={this.handleFilter} />
                <InsertionBar add={this.addItem} />
              </div>
              <DraggableList
                list={this.state.list}
                onDelete={this.handleDelete}
                filterText={this.state.filterText}
                onChange={this.listOrderChange}
              />
            </div>
          )}
        </Content>
      </div>
    );
  }
}

export default App;
