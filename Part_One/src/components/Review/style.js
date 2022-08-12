import styled from "styled-components";

export const Wrapper = styled.section`
  flex-wrap: wrap;
  padding-inline: 10%;

  &::before {
    inset: 0;
    content: "";
    opacity: 0.3;
    position: absolute;
    background-color: var(--1);
  }

  & > * {
    z-index: 1;
  }
`;

export const Title = styled.div`
  gap: 1em;
  height: 100%;
  display: flex;
  flex: 2 1 20em;
  min-width: 30%;
  min-height: 12em;
  padding: 5%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const T = styled.h2`
  line-height: 1;
  color: var(--6);
  font-family: "Lato";
  font-size: clamp(2em, 3.3vw, 4em);
`;

export const P = styled.p`
  color: var(--8);
  font-family: "Lato";
`;

export const Content = styled.div`
  gap: 5em;
  display: flex;
  flex: 4 1 18em;
  overflow: hidden;
  min-height: 12em;
  align-items: center;
  padding-inline: 4em;
  justify-content: flex-start;
  scroll-snap-type: x mandatory;
`;

export const Tabs = styled.div`
  gap: 1em;
  flex: none;
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
