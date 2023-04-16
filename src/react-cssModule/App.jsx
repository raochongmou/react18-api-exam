import React, { PureComponent } from "react";
import styleModeul from "./css/style.module.less";

export class App extends PureComponent {
  render() {
    return <div className={styleModeul.app}>App</div>;
  }
}

export default App;
