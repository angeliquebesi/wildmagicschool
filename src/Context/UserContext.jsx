import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [userPersonnage, setUserPersonnage] = useState("");
  const [potions, setPotions] = useState([]);
  const [spells, setSpells] = useState([]);
<<<<<<< HEAD
  const [Ennemy1, setEnnemy1] = useState(false);
=======
  const [Ennemys, setEnnemys] = useState([]);
>>>>>>> dev
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
<<<<<<< HEAD
        Ennemy1,
        setEnnemy1,
=======
        Ennemys,
        setEnnemys,
>>>>>>> dev
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
