import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [lesson, setLesson] = useState({});
  const [userPersonnage, setUserPersonnage] = useState({});

  return (
    <GameContext.Provider
      value={{
        userPersonnage,
        setUserPersonnage,
        lesson,
        setLesson
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
