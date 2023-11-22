import { createContext, useContext, useEffect, useState } from "react";
import { useScore } from "./scoreContexts";

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [avatars, setAvatars] = useState([]);
  const { setScore, setBestScore, score, bestScore } = useScore();
  const [clickedNames, setClickedNames] = useState([]);

  useEffect(() => {
    const generateAnimalAvatars = async () => {
      const names = [
        "Lion",
        "Tiger",
        "Bear",
        "Elephant",
        "Giraffe",
        "Penguin",
        "Kangaroo",
        "Zebra",
        "Panda",
        "Koala",
        "Hippo",
        "Monkey",
      ];
      for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
      }
      const avatarPromises = names.map(async (name, index) => {
        const response = await fetch(
          `https://robohash.org/${name.toLowerCase()}.png?set=set4&size=100x100`
        );
        const avatarUrl = response.url;

        const avatarObject = {
          id: index + 1,
          position: index + 1,
          name,
          avatarUrl,
        };

        return avatarObject;
      });

      const avatarsData = await Promise.all(avatarPromises);
      console.log(avatarsData);
      setAvatars(avatarsData);
    };

    generateAnimalAvatars();
  }, [score]);

  function handleClick(cname) {
    if (!clickedNames.includes(cname)) {
      setClickedNames([...clickedNames, cname]);
      setScore((score) => score + 1);
    } else {
      setBestScore(score);
      setScore(0);
    }
  }

  return (
    <CardContext.Provider value={{ avatars, handleClick }}>
      {children}
    </CardContext.Provider>
  );
};
function useCard() {
  const context = useContext(CardContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CardContextProvider, useCard };
