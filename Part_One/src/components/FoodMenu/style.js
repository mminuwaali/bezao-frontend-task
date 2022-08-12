import styled from "styled-components";

export const Wrapper = styled.section`
  flex-direction: column;
`;

export const Title = styled.div`
  gap: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const T = styled.h3`
  color: var(--1);
  font-weight: 900;
  font-family: "Lato";
  text-transform: uppercase;
`;

export const Aside = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  font-size: 2em;
  color: var(--6);
  font-weight: 900;
  font-family: sans-serif;
`;

export const Tabs = styled.div`
  gap: 0.5em;
  flex: none;
  display: flex;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 0.02em solid var(--4);

  @media screen and (max-width: 40em) {
    margin-inline: auto;
  }
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  padding: 0.5em;
  cursor: pointer;
  font-weight: 900;
  font-family: "Lato";
  border-radius: 0.5em;
  text-transform: capitalize;
  color: var(--${({ current }) => (current ? 5 : 6)});
  background: var(--${({ current }) => (current ? 1 : 7)});
`;

export const Content = styled.div`
  gap: 2em;
  width: 100%;
  display: grid;
  margin: 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
`;

export const Menu = styled.div`
  flex: none;
  width: 100%;
  display: grid;
  margin: 1em auto;
  place-content: center center;
`;

export const Btn = styled.button`
  border: none;
  color: var(--5);
  font-weight: 900;
  padding: 0.8em 2em;
  border-radius: 2em;
  text-transform: capitalize;
  background-color: var(--1);
`;
