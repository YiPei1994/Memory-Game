import styled from "styled-components";
import AppLayouts from "./pages/AppLayouts";
import { ScoreContextProvider } from "../src/helper/scoreContexts";
import { CardContextProvider } from "./helper/CardContext";
const StyledApp = styled.div`
  width: 100%;
  height: 100dvh;
  background: linear-gradient(to bottom, skyblue, #e0e0e0);
  margin: 0;
  padding: 0;
`;
function App() {
  return (
    <ScoreContextProvider>
      <CardContextProvider>
        <StyledApp>
          <AppLayouts />
        </StyledApp>
      </CardContextProvider>
    </ScoreContextProvider>
  );
}

export default App;
