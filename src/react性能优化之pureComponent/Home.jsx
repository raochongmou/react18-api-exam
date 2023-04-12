import React, { PureComponent } from "react";

export default class Home extends PureComponent {
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
