import React, { Component } from "react";
import "./style.css";

class InsertionBar extends Component {
  render() {
    return (
      <div className="insertion-bar">
        <input type="text" placeholder="Bir şeyler ekle" />
        <button type="button">Ekle</button>
      </div>
    );
  }
}
export default InsertionBar;
