import { Component } from "react";

export function hoc(Cpn) {
  return class extends Component {
    render() {
      // return <Cpn name="rao" age={18} />;
      return <Cpn name="rao" age={18} {...this.props} />;
    }
  };
}
