import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.titleRef = createRef();
    this.titleRef2 = null;
  }
  getNativeDom() {
    // 方式一：this.ref.的方式 不推荐
    // console.log(this.refs.rao);
    // 方式二：createRef方式获取
    // console.log(this.titleRef.current);
    console.log(this.titleRef2);
  }
  render() {
    return (
      <div>
        <h2 ref="rao">你好啊， react</h2>
        <h2 ref={this.titleRef}>你好啊， react</h2>
        <h2 ref={el => (this.titleRef2 = el)}>你好啊， react</h2>
        <button onClick={() => this.getNativeDom()}>获取dom</button>
      </div>
    );
  }
}

export default App;
