import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  grid-area: 1 / 2 / 2 / 6;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 8rem;
  color: navy;
`;

const P = styled.p`
  font-size: 2.5rem;
`;
export default function Header() {
  return (
    <StyledHeader>
      <H1>Memory Game</H1>
      <P>Get point by clicking on image but only once</P>
    </StyledHeader>
  );
}
