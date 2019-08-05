import React from "react";
import "./App.css";

import FilterBar from "./components/filterBar";
import InsertionBar from "./components/insertionBar";
import Content from "./components/content";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: []
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

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <FilterBar />
          <InsertionBar add={this.addItem} />
        </div>
        <div className="app-content">
          <Content list={this.state.list} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;
