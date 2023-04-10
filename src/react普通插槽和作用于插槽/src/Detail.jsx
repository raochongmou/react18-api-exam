import React, { Component } from "react";
import "./css/index.css";

// 第一种方式预留插槽(通过props.children来做插入)
// export default class Detail extends Component {
//   render() {
//     const { children } = this.props;
//     return (
//       <div className="detail">
//         <div className="left">
//           {children[0]}
//         </div>
//         <div className="center">
//           {children[1]}
//         </div>
//         <div className="right">
//           {children[2]}
//         </div>
//       </div>
//     );
//   }
// }

// 第二种方式预留插槽
// export default class Detail extends Component {
//   render() {
//     const { left, center, right } = this.props;
//     return (
//       <div className="detail">
//         <div className="left">
//           {left}
//         </div>
//         <div className="center">
//           {center}
//         </div>
//         <div className="right">
//           {right}
//         </div>
//       </div>
//     );
//   }
// }
// 作用于插槽-定义:子组件内部数据固定,但外部使用者需要改变组件的类型时
export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      name: "小饶",
      age: 28
    };
  }
  render() {
    const { info } = this.props;
    const { age, name } = this.state;
    return (
      <div className="detail">
        {info(age, name)}
      </div>
    );
  }
}
