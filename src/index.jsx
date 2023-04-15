import ReactDOM from "react-dom/client";
// import { App } from "./react生命周期/App";
// import App from "./react父子组件通信/src/App";
// import App from "./react普通插槽和作用于插槽/src/App";
// import App from "./react性能优化之shouldComponentUpdate/App";
// import App from "./react性能优化之pureComponent/App";
// import App from "./react不可变的力量/App";
// import App from "./react之ref获取dom/App";
// import App from "./react受控与非受控组件/App";
// import App from "./react_craco-less-sass使用/App";
// import App from "./react-css-in-js/App";
import App from "./react高阶组件/App";
// import { StrictMode } from "react";
// import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./react高阶组件/context/theme";

const app = ReactDOM.createRoot(document.querySelector("#root"));

app.render(
  // <StrictMode>
  // <ThemeProvider
  //   theme={{ globalColor: "orange", globalWidth: 400, globalHeight: 400 }}
  // >
  //   <App />
  // </ThemeProvider>
  // {/* </StrictMode> */}
  <ThemeContext.Provider value={{ color: "#ddd;", fontSize: 36 }}>
    <App />
  </ThemeContext.Provider>
);

// const name = "rao";
// const age = 18;

// function foo(...arg) {
//   console.log(arg);
//   console.log("arguments", arguments);
//   const args = Array.from(
//     arguments,
//     (item, index) =>
//       item == 18 ? item : Array.from(arguments).splice(index, 1)
//   );
//   console.log(args);
//   console.log("arguments2", arguments);
// }

// foo`姓名：${name},年龄：${age}`;
