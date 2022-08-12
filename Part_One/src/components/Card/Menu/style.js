import styled from "styled-components";

export const Card = styled.div`
  --o: 0.2em;
  height: 26em;
  display: flex;
  overflow: hidden;
  border-radius: 1em;
  transition: 200ms ease;
  flex-direction: column;
  background-color: var(--5);
  box-shadow: 0 0 var(--o) rgba(0 0 0 / 0.2);

  &:hover {
    --o: 0.6em;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 60%;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Aside = styled.aside`
  width: 100%;
  height: 40%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const H3 = styled.h3`
  color: var(--6);
  font-weight: 700;
  font-family: "Lato";
`;

export const P = styled.p`
  color: var(--4);
  font-family: "Lato";
`;

export const S = styled.span`
  color: var(--4);
  font-weight: 500;
  font-size: 1.2em;
  font-family: "Lato";
`;
