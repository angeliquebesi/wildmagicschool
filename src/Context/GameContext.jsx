import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [lesson, setLesson] = useState({});
  const [userPersonnage, setUserPersonnage] = useState({});
  const [potions, setPotions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [idMonster, setIdMonster] = useState("");
  const [defeatedMonster, setDefeatedMonster] = useState([1]);

  return (
    <GameContext.Provider
      value={{
        userPersonnage,
        setUserPersonnage,
        lesson,
        setLesson,
        potions,
        setPotions,
        spells,
        setSpells,
        idMonster,
        setIdMonster,
        defeatedMonster,
        setDefeatedMonster
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
