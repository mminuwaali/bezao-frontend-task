import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  z-index: 10;
  height: 5em;
  display: flex;
  position: sticky;
  align-items: center;
  background-color: var(--5);
  justify-content: space-between;
  box-shadow: 0 0.5em 1em rgba(0 0 0 / 0.1);
`;

export const Logo = styled.img`
  height: 3em;

  @media screen and (max-width: 40em) {
    height: 2em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1 1 auto;

  @media screen and (max-width: 40em) {
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 19;
    position: absolute;
    align-items: stretch;
    justify-content: stretch;
    height: calc(100vh - 5em);
    background-color: inherit;
    flex-direction: column-reverse;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

export const Main = styled.main`
  gap: 2em;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  padding-inline: 5%;
  justify-content: center;

  @media screen and (max-width: 40em) {
    padding: 8%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const A = styled(NavLink)`
  gap: 1em;
  display: flex;
  color: var(--4);
  position: relative;
  align-items: center;
  text-decoration: none;
  transition: 500ms ease;
  justify-content: center;
  font-family: "Lato" sans-serif;

  @media screen and (max-width: 40em) {
    display: ${({ self }) => (self ? "none" : "flex")};

    &:nth-child(3) {
      order: 4;
    }
  }

  &:nth-child(4) {
    margin-left: auto;

    @media screen and (max-width: 40em) {
      margin-left: 0;
    }
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 0%;
    content: "";
    height: 2px;
    border-radius: 1em;
    position: absolute;
    transition: 500ms ease;
    background-color: var(--1);

    @media screen and (max-width: 40em) {
      display: none;
    }
  }

  &.active,
  &:hover {
    color: var(--1);

    &::after {
      width: 30%;
    }
  }

  svg {
    width: 1.5em;
    height: 1.5em;
    object-fit: contain;
    display: ${({ always }) => (always ? "block" : "none  ")};

    @media screen and (max-width: 40em) {
      display: inline-block;
    }
  }
`;

export const Icon = styled.img`
  width: 2em;
  display: none;
  object-fit: contain;

  @media screen and (max-width: 40em) {
    display: inline-block;
  }
`;

export const I = styled.i`
  font-style: normal;
  font-family: sans-serif;
  text-transform: capitalize;
  display: ${({ invert }) => (invert ? "none" : "inline-block")};

  @media screen and (max-width: 40em) {
    font-size: 1.2em;
    display: inline-block;
  }
`;

export const Aside = styled.aside`
  gap: 1em;
  flex: none;
  display: flex;

  @media screen and (max-width: 40em) {
    justify-content: flex-end;
    flex-direction: row-reverse;
    padding: 5%;
  }
`;

export const Btn = styled.button`
  border: none;
  color: var(--5);
  cursor: pointer;
  padding: 1em 2em;
  font-weight: 900;
  border-radius: 2.5em;
  background-color: var(--1);
  text-transform: capitalize;

  &:first-child {
    color: var(--3);
    background-color: transparent;

    @media screen and (max-width: 40em) {
      border: 0.2em solid var(--1);
    }
  }
`;

export const Menu = styled.img`
  height: 2em;
  display: none;
  object-fit: contain;

  @media screen and (max-width: 40em) {
    display: flex;
  }
`;
