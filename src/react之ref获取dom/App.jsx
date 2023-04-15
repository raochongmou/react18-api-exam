import React, { PureComponent, createRef, forwardRef } from "react";

const Hello = forwardRef(function(props, ref) {
  return (
    <div>
      <h2 ref={ref}>hellow forwardRef</h2>
    </div>
  );
});

class App extends PureComponent {
  constructor() {
    super();
    this.titleRef = createRef();
  }
  getNativeDom() {
    console.log(this.titleRef.current);
  }
  render() {
    return (
      <div>
        <Hello ref={this.titleRef} />
        <button onClick={() => this.getNativeDom()}>获取dom</button>
      </div>
    );
  }
}

export default App;
