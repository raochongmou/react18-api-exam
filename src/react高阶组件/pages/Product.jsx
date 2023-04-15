import React, { PureComponent } from "react";
import originComponent from "../hoc/OriginComponent";
import Wrapper from "../css/style";

export default originComponent(
  class extends PureComponent {
    render() {
      const { color, fontSize } = this.props;
      return (
        <Wrapper {...this.props}>
          <h2>
            Product: {color}--{fontSize}
          </h2>
        </Wrapper>
      );
    }
  }
);

// export default Product;
