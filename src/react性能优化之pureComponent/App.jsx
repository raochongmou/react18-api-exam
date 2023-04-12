import React, { PureComponent } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello react",
      counter: 0
    };
  }
  changeText() {
    this.setState({
      // message: "hello react"
      message: "你好，react!"
    });
  }
  addClick() {
    this.setState({
      counter: this.state.counter + 1
    });
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
        <Profile message={message} />
      </div>
    );
  }
}
