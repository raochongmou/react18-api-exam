import { Component } from "react";

export class App extends Component {
  constructor() {
    console.log("App constructor");
    super();
    this.state = {
      message: "hello react"
    };
  }
  changeText() {
    this.setState({
      message: "hello vue"
    });
  }
  render() {
    console.log("App render");
    const { message } = this.state;
    return (
      <div>
        <h2>
          {message}
        </h2>
        <input type="button" onClick={e => this.changeText()} value="点击切换" />
      </div>
    );
  }
  componentDidMount() {
    console.log("App componentDidMount");
  }
  /***
   * @param preProps 更新前的props
   * @param preState 更新前的state
   * @param snapshoot 记录更新前的状态(例如:滚动前的位置)
   */
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("App componentDidUpdate", preProps, preState, snapshot);
  }
  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }
  getSnapshotBeforeUpdate() {
    return {
      name: "rcm",
      age: 18
    };
  }
  shouldComponentUpdate() {
    // true表示渲染函数render会被执行,反之不会
    return true;
  }
}

export default App;
