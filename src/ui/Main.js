import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useCard } from "../helper/CardContext";

const StyledMain = styled.main`
  grid-area: 2 / 2 / 6 / 6;
  border: 1px solid navy;
  padding: 2rem;
  width: 95%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const Main = () => {
  const { avatars, handleClick } = useCard();

  return (
    <StyledMain>
      {avatars.map((avatar) => (
        <Card
          avatar={avatar}
          key={avatar.name}
          onClick={() => handleClick(avatar.name)}
        />
      ))}
    </StyledMain>
  );
};

export default Main;
