import React, { Component } from "react";
import Home from "./Home";
import Recommend from "./Recommend";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello react",
      counter: 0
    };
  }
  changeText() {
    this.setState({
      message: "hello react"
      // message: "你好，react!"
    });
  }
  addClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  shouldComponentUpdate(newProps, { message, counter }) {
    if (message !== this.state.message || counter !== this.state.counter) {
      return true;
    }
    return false;
  }
  render() {
    console.log("App render");
    const { message, counter } = this.state;
    return (
      <div>
        <h2>
          {message}
        </h2>
        <button onClick={() => this.changeText()}>切换文本</button>
        <button onClick={() => this.addClick()}>+1</button>
        <Home counter={counter} />
        <Recommend message={message} />
      </div>
    );
  }
}
