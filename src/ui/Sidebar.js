import React, { useContext } from "react";
import styled from "styled-components";
import { useScore } from "../helper/scoreContexts";

const StyledSidebar = styled.div`
  grid-area: 1 / 1 / 6 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 3rem;
  width: 100%;
`;

const Score = styled.div`
  border: 1px solid navy;
  padding: 3rem;
  font-size: 2rem;
  margin-bottom: 5rem;
`;

const Span = styled.span`
  font-size: 4rem;
  display: inline-block;
  margin-left: 5rem;
`;
export default function Sidebar() {
  const { score, bestScore } = useScore();
  return (
    <StyledSidebar>
      <ScoreBoard>
        <Score>
          Your score: <Span>{score}</Span>
        </Score>
        <Score>
          Best score: <Span>{bestScore}</Span>
        </Score>
      </ScoreBoard>
    </StyledSidebar>
  );
}
