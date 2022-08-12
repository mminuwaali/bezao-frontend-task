import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const Wrapper = styled.section`
  height: 34em;
  display: grid;
  background-color: var(--5);
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));

  & > * {
    z-index: 1;
  }

  @media screen and (max-width: 40em) {
    height: 92vh;
    background: var(--1);

    &::after,
    &::before {
      width: 70%;
      content: "";
      position: absolute;
      transform-origin: top right;
      background: linear-gradient(rgba(255 255 255 / 0.2), transparent);
    }

    &::before {
      top: 0;
      left: 0;
      height: 12em;
      transform: skewX(-54deg);
    }

    &::after {
      top: 50%;
      right: 0;
      height: 8em;
      transform: skewY(-25deg);
      background: linear-gradient(220deg, rgba(255 255 255 / 0.2), transparent);
    }
  }
`;

export const [Main, Aside] = Array(2).fill(styled.div`
  gap: 1.4em;
  display: flex;
  padding: 1em 0;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`);

export const Middle = styled.div`
  gap: 1em;
  width: 100%;
  display: none;
  margin-top: 1em;
  position: relative;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 40em) {
    display: flex;
  }
`;

export const Txt = styled.h3`
  color: var(--5);
  font-size: 1em;
  font-family: "Lato";
  text-transform: capitalize;
`;

export const Icon = styled(FiSearch)`
  top: 3em;
  left: 6%;
  z-index: 1;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  stroke-opacity: 0.5;
  object-fit: contain;
  transform: translate(-50%, -20%);
`;

export const Inupt = styled.input`
  width: 100%;
  height: 4em;
  border: none;
  outline: none;
  max-width: 90vw;
  position: relative;
  padding: 0.2em 10%;
  border-radius: 0.5em;
  background-color: var(--5);
`;

export const H2 = styled.h2`
  font-size: 4em;
  color: var(--6);
  max-width: 90vw;
  line-height: 1em;
  font-weight: 900;
  font-family: "Lato";
  font-size: clamp(1.8em, 5vw, 5em);

  @media screen and (max-width: 40em) {
    color: var(--5);
    font-weight: 900;
    font-family: sans-serif;
  }
`;

export const P = styled.p`
  color: var(--3);
  max-width: 90vw;
  font-family: "Lato";
  width: max(20em, 60%);
  text-transform: capitalize;

  @media screen and (max-width: 40em) {
    color: var(--5);
  }
`;

export const Btn = styled.button`
  border: none;
  color: var(--5);
  padding: 0.7em 5em;
  border-radius: 2em;
  background-color: var(--1);
  text-transform: capitalize;

  @media screen and (max-width: 40em) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 80%;
  height: 80%;
  margin: auto;
  object-fit: contain;

  @media screen and (max-width: 40em) {
    width: 100%;
    height: 100%;
  }
`;
