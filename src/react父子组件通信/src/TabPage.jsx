import React, { Component } from "react";
import TabBar from "./TabBar";

class TabPage extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "经典", "古风"],
      titleIndex: 0
    };
  }
  getTitleIndex(titleIndex) {
    this.setState({ titleIndex });
  }
  render() {
    const { titles, titleIndex } = this.state;
    return (
      <div>
        <TabBar
          titles={titles}
          titleIndex={titleIndex => this.getTitleIndex(titleIndex)}
        />
        <span>
          {titles[titleIndex]}
        </span>
      </div>
    );
  }
}

export default TabPage;
