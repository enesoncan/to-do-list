import React, { Component } from "react";
import "./style.css";

class FilterBar extends Component {
  render() {
    return (
      <div className="filter-bar">
        <input type="text" placeholder="Listede Ara" />
      </div>
    );
  }
}
export default FilterBar;
