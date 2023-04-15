import styled from "styled-components";

export default styled.div`
  .home {
    background-color: ${({ theme }) => theme.globalColor};
    width: ${({ theme }) => theme.globalWidth}px;
    height: ${({ theme }) => theme.globalHeight}px;
  }
`;
