import React, { Component } from "react";
import "./style.css";

class FilterInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search In The List"
          onChange={e => onChange(e)}
        />
      </div>
    );
  }
}
export default FilterInput;
