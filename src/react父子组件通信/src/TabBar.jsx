import React, { Component } from "react";
import "./css/index.css";
import propTypes from "prop-types";
import { Theme } from "./context";

class TabBar extends Component {
  static contextType = Theme;
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  titleClick(activeIndex, titleIndex) {
    this.setState({ activeIndex });
    titleIndex(activeIndex);
  }
  render() {
    const { name, age } = this.context;
    const { titles, titleIndex } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className="tab-bar">
        {titles.map((title, index) => {
          return (
            <div key={title} onClick={() => this.titleClick(index, titleIndex)}>
              <span
                className={`tab-bar-item ${activeIndex === index
                  ? "active"
                  : ""}`}
              >
                {title}
              </span>
            </div>
          );
        })}
        <div>
          {name}
        </div>
        <div>
          {age}
        </div>
        <div>
          <Theme.Consumer>
            {({ hobby }) => hobby}
          </Theme.Consumer>
        </div>
      </div>
    );
  }
}

// 类型校验
TabBar.propTypes = {
  titles: propTypes.array.isRequired,
  titleIndex: propTypes.func.isRequired
};

// TabBar.contextType = Theme;

export default TabBar;
