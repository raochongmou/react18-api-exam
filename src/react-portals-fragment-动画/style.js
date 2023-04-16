import styled from "styled-components";

export default styled.div`
  .rcm-enter {
    opacity: 0;
    transform: translateX(300px);
  }
  .rcm-enter-active {
    opacity: 1;
    transform: translateX(0);
    /* transition: all 2s ease; */
    transition-property: opacity, transform;
    transition-duration: 2s, 2s;
  }

  .rcm-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .rcm-exit-active {
    opacity: 0;
    transform: translateX(-300px);
    transition: all 2s ease;
  }
`;
