import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid navy;
  flex: 1 / 6;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: skyblue;
  margin: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #add8e6;
  }
`;

const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: 18rem;
  margin-bottom: 2rem;
`;

const Name = styled.h4`
  text-align: center;
  font-size: 2.5rem;
`;
export default function Card({ avatar, onClick }) {
  const { name, avatarUrl } = avatar;

  return (
    <StyledCard onClick={onClick}>
      <Image src={avatarUrl} />
      <Name>{name}</Name>
    </StyledCard>
  );
}
