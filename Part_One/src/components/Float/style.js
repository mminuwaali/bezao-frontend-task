import styled from "styled-components";

export const Wrapper = styled.section`
  bottom: 0;
  z-index: 100;
  position: fixed;
  align-items: center;
  pointer-events: none;
  justify-content: flex-end;
`;

export const A = styled.a`
  width: 5em;
  height: 5em;
  position: relative;
  pointer-events: all;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
