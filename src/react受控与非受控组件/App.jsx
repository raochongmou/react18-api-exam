import React, { PureComponent } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "123456"
//     };
//   }
//   inputChange(e) {
//     console.log(e.target.value);
//     this.setState({
//       username: e.target.value
//     });
//   }
//   render() {
//     const { username } = this.state;
//     return (
//       <div>
//         <input value={username} onChange={e => this.inputChange(e)} />
//         <h2>
//           {username}
//         </h2>
//       </div>
//     );
//   }
// }

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fruits: []
    };
  }

  inpChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(
      "handleSubmit",
      this.state.username,
      this.state.password,
      this.state.fruits
    );
  }

  selectChange(e) {
    const fruits = Array.from(e.target)
      .filter(item => item.selected)
      .map(item => item.value);
    this.setState({ fruits });
  }

  render() {
    const { username, password, fruits } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：
            <input
              id="username"
              value={username}
              name="username"
              onChange={e => this.inpChange(e)}
            />
          </label>
          <label htmlFor="password">
            密码：
            <input
              id="password"
              value={password}
              name="password"
              onChange={e => this.inpChange(e)}
            />
          </label>
          喜好水果：
          <select multiple value={fruits} onChange={e => this.selectChange(e)}>
            <option value="banana" label="香蕉" />
            <option value="pear" label="梨子" />
            <option value="apple" label="苹果" />
            <option value="orange" label="橘子" />
          </select>
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
