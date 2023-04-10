import React, { Component } from "react";
import Detail from "./Detail";

// 方式一:通过直接插入父组件标签,传递到子组件的props.children内部
// 弊端:如果嵌入的是一个子元素,那么props.children将是一个普通的属性
// 如果是多个组件,props.children将是一个数组,外部使用者需要明确知道组件内部是如何取值,
// 相对来说不推荐这样使用
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Detail>
//           <h1>首页</h1>
//           <h2>搜索</h2>
//           <span>获取</span>
//         </Detail>
//       </div>
//     );
//   }
// }

// 方式二:通过props传递的形式来传递一个组件或元素都可以
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       info: {
//         left: <h3>左边</h3>,
//         center: <button>中间</button>,
//         right: <span>右边</span>
//       }
//     };
//   }
//   render() {
//     const { info } = this.state;
//     return (
//       <div>
//         <Detail {...info} />
//       </div>
//     );
//   }
// }

// 作用于插槽
export default class App extends Component {
  render() {
    return (
      <div>
        <Detail
          info={(age, name) => {
            return (
              <div>
                <span>
                  {name}今年{age}岁了
                </span>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
