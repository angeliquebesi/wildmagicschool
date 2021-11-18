import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userHouse, setUserHouse] = useState("");
  const [quizzChoice, setquizzChoice] = useState("");

  return (
    <UserContext.Provider
      value={{
        userHouse,
        setUserHouse,
        quizzChoice,
        setquizzChoice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
