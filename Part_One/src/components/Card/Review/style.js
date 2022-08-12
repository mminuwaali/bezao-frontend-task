import styled from "styled-components";

export const Card = styled.div`
  flex: none;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 1em;
  scroll-snap-align: center;
  background-color: var(--5);
  width: clamp(16em, 40vw, 50em);
`;

export const Main = styled.main`
  gap: 0.5em;
  padding: 5%;
  display: flex;
  flex: 1 1 10em;
  flex-wrap: wrap;
  min-height: 50%;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  width: clamp(1.6em, 16vw, 6em);
`;

export const Txt = styled.div`
  gap: 1em;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const H3 = styled.h3`
  line-height: 1;
  color: var(--6);
  font-weight: 900;
  text-align: center;
  font-family: "Lato";
  font-size: clamp(1em, 6vw, 2em);
`;

export const S = styled.span`
  color: var(--4);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
`;

export const Aside = styled.aside`
  padding: 5%;
  display: flex;
  flex: 4 1 10em;
  flex-wrap: wrap;
  min-height: 50%;
  align-items: center;
  justify-content: flex-start;
`;

export const P = styled.p`
  color: var(--3);
  font-family: "Lato";
`;
