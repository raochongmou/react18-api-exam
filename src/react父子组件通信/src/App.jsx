import React, { Component } from "react";
import TabPage from "./TabPage";
import { Theme } from "./context";

export default class App extends Component {
  render() {
    return (
      <div>
        <Theme.Provider value={{ name: "rcm", age: 28, hobby: "篮球" }}>
          <TabPage />
        </Theme.Provider>
      </div>
    );
  }
}
