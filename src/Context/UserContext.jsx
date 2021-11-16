import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [userPersonnage, setUserPersonnage] = useState("");
  const [potions, setPotions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [Ennemy1, setEnnemy1] = useState(false);
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
        Ennemy1,
        setEnnemy1,
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
