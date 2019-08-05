import React from "react";
import "./App.css";

import InsertionBar from "./components/insertionBar";
import Content from "./components/content";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
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
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search On The List"
              onChange={e => this.handleFilter(e)}
            />
          </div>
          <InsertionBar add={this.addItem} />
        </div>
        <div className="app-content">
          <Content
            list={this.state.list}
            onDelete={this.handleDelete}
            filterText={this.state.filterText}
          />
        </div>
      </div>
    );
  }
}

export default App;
