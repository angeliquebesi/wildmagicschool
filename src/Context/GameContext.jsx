import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [lesson, setLesson] = useState({});

  return (
    <GameContext.Provider
      value={{
        lesson,
        setLesson
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
