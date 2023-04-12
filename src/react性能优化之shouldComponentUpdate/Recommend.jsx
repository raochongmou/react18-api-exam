import React, { Component } from "react";

export default class Recommend extends Component {
  shouldComponentUpdate({ message }) {
    if (message !== this.props.message) {
      return true;
    }
    return false;
  }
  render() {
    console.log("Recommend render");
    const { message } = this.props;
    return (
      <div>
        <h2>
          {message}
        </h2>
      </div>
    );
  }
}
