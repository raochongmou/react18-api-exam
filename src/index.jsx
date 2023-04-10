import ReactDOM from "react-dom/client";
// import { App } from "./react生命周期/App";
import App from "./react父子组件通信/src/App";
// import App from "./react普通插槽和作用于插槽/src/App";
const app = ReactDOM.createRoot(document.querySelector("#root"));

app.render(<App />);
