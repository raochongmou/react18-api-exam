import { PureComponent } from "react";
import { hoc } from "./hoc/Hoc";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>
          姓名：{this.props.name}
        </h2>
        <h2>
          年龄：{this.props.age}
        </h2>
        {this.props.hobby.map(item => {
          return (
            <li key={item}>
              {item}
            </li>
          );
        })}
      </div>
    );
  }
}

export default hoc(Home);
