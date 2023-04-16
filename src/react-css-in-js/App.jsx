import { Fragment, PureComponent } from "react";
import { WrapperCss, RcmButton } from "./style.js";
import Home from "./home";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      largeFs: 60,
      customColor: "#eee",
      customBorder: `5px solid #eee`
    };
  }
  render() {
    const { largeFs, customColor } = this.state;
    // const { largeFs, customColor, customBorder } = this.state;
    return (
      <Fragment>
        <WrapperCss
          largeFs={largeFs}
          customColor={customColor}
          // customBorder={customBorder}
        >
          <div className="section">
            <h2>section</h2>
            <p>css in js</p>
          </div>
          <div className="content">
            <a href="#javascript">百度一下</a>
            <h5>加载更多</h5>
          </div>
          <div className="footer">
            <span>footer</span>
            <p>成就自己的梦想</p>
          </div>
        </WrapperCss>
        <Home />
        <RcmButton>继承样式</RcmButton>
      </Fragment>
    );
  }
}

export default App;
