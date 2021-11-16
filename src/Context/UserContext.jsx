import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [userPersonnage, setUserPersonnage] = useState("");
  const [potion1, setpotion1] = useState(false);
  const [spell1, setspell1] = useState(false);
  const [Ennemy1, setEnnemy1] = useState(false);
  const [quizzChoice, setquizzChoice] = useState("");
  const [idMonster, setIdMonster] = useState("");

  return (
    <UserContext.Provider
      value={{
        userHouse,
        setUserHouse,
        userPersonnage,
        setUserPersonnage,
        potion1,
        setpotion1,
        spell1,
        setspell1,
        Ennemy1,
        setEnnemy1,
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
