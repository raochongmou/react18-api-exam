import styled from "styled-components";

export default styled.div`
  h2 {
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${({ color }) => color};
  }
`;
