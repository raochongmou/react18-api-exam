import React, { PureComponent } from "react";

export default class Recommend extends PureComponent {
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
