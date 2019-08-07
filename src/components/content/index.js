import React, { Component } from "react";
import "./style.css";

class Content extends Component {
  render() {
    const { children } = this.props;
    return <div className="content">{children()}</div>;
  }
}
export default Content;
