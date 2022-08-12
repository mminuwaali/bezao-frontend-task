import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --1: #DA3743;
    --2: #30475E;
    --3: #1A1A1A;
    --4: #666666;
    --5: #FFFFFF;
    --6: #000000;
    --7: #FAFAFA;
    --8: #67758D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body, #root {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: var(--7);
  }

  header, section, footer {
    width: 100%;
    display: flex;
    padding: 1em 7%;
    position: relative;
  }
`;
