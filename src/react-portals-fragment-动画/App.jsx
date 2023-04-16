import { PureComponent } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Wrapper from "./style";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      showRcm: false
    };
  }
  render() {
    const { showRcm } = this.state;
    return (
      <div>
        <h1>我是挂载到root上的</h1>
        <button
          onClick={() =>
            this.setState({
              showRcm: !showRcm
            })}
        >
          展示动画
        </button>

        {createPortal(
          <Wrapper>
            <CSSTransition
              classNames={"rcm"}
              timeout={2000}
              in={showRcm}
              unmountOnExit
            >
              <h1>我是挂载到rcm上的</h1>
            </CSSTransition>
          </Wrapper>,
          document.querySelector("#rcm")
        )}
      </div>
    );
  }
}

export default App;
