import { Fragment, PureComponent } from "react";
import "./App.scss";
import "./App.less";

export class Home extends PureComponent {
  render() {
    return <div className="app-less">我是aa</div>;
  }
}

export class App extends PureComponent {
  // UNSAFE_componentWillMount() {
  //   console.log("UNSAFE_componentWillMount");
  // }
  render() {
    return (
      <Fragment>
        <div className="aa">App</div>
        <Home />
      </Fragment>
    );
  }
}

export default App;
