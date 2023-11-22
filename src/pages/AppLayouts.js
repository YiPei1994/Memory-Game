import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import Main from "../ui/Main";

const StyledAppLayouts = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;
  height: 100dvh;
`;

export default function AppLayouts() {
  return (
    <StyledAppLayouts>
      <Header />

      <Sidebar />

      <Main />
    </StyledAppLayouts>
  );
}
