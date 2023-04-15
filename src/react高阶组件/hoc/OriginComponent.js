import { ThemeContext } from "../context/theme";

export default OriginComponent => {
  return props => {
    return (
      <ThemeContext.Consumer>
        {value => <OriginComponent {...value} {...props} />}
      </ThemeContext.Consumer>
    );
  };
};
