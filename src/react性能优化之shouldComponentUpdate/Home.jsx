import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log("Home render");
    const { counter } = this.props;
    return (
      <div>
        <h2>
          {counter}
        </h2>
      </div>
    );
  }
}
