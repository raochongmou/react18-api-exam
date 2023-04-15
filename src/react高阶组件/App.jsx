import React, { PureComponent } from "react";
import Home from "./Home";
import Product from "./pages/Product";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Home hobby={["篮球", "羽毛球"]} />
        <Product />
      </div>
    );
  }
}

export default App;
