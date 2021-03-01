import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [backColor, setBackColor ]= useState({
    header: '#350d36',
    sidebar: '#3f0e40',
    chat: 'white',
    primaryText: 'white',
    secondaryText: 'rgb(188,171,188)'
  });
  //rgb(188,171,188)
  //#3f0e40;
 
  return (
    <AppContext.Provider
      value={{
        backColor,
        setBackColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
