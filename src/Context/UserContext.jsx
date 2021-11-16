import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [userPersonnage, setUserPersonnage] = useState("");
  const [potions, setPotions] = useState([2]);
  const [spells, setSpells] = useState([2]);
  const [Ennemys, setEnnemys] = useState([]);
  const [quizzChoice, setquizzChoice] = useState("");
  const [idMonster, setIdMonster] = useState("");

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
        setIdMonster
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
