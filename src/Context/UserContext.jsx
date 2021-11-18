import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [quizzChoice, setquizzChoice] = useState("");
  const [idLesson, setIdLesson] = useState("");
  return (
    <UserContext.Provider
      value={{
        userHouse,
        setUserHouse,
        quizzChoice,
        setquizzChoice,
        idLesson,
        setIdLesson,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
