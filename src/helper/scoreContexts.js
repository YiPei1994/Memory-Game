import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore, bestScore, setBestScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

function useScore() {
  const context = useContext(ScoreContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { ScoreContextProvider, useScore };
