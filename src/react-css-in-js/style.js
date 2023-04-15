import styled from "styled-components";

export const WrapperCss = styled.div.attrs({
  defaultBorder: props => props.customBorder || "10px solid purple"
})`
  .section {
    background-color: #ccc;
    h2 {
      font-size: "30px";
      color: red;
    }
    p {
      color: blue;
    }
  }
  .footer {
    background-color: #aaa;
    &:hover {
      background-color: #abcdef;
    }

    span {
      font-size: "16px";
    }
    p {
      color: purple;
    }
  }
  /* props的使用 */
  .content {
    border: ${({ defaultBorder }) => defaultBorder};
    font-size: ${props => props.largeFs}px;
  }
`;
