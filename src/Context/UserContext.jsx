import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [userPersonnage, setUserPersonnage] = useState("");
  const [potions, setPotions] = useState([1]);
  const [spells, setSpells] = useState([1]);
  const [Ennemys, setEnnemys] = useState([]);
  const [quizzChoice, setquizzChoice] = useState("");
  const [idMonster, setIdMonster] = useState("");
  const [idLesson, setIdLesson] = useState("");

  return (
    <UserContext.Provider
      value={{
        userHouse,
        setUserHouse,
        userPersonnage,
        setUserPersonnage,
        potions,
        setPotions,
        spells,
        setSpells,
        Ennemys,
        setEnnemys,
        quizzChoice,
        setquizzChoice,
        idMonster,
        setIdMonster,
        idLesson,
        setIdLesson
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
