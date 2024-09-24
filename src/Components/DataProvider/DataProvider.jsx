import React, { createContext, useReducer } from "react";

export const DataContext = createContext();
//createContext(): This function is part of React’s Context API. It creates a new context object that can be used to share data across components without having to pass props down manually at every level.
//DataContext: This is the context object that will be used to provide and consume the state throughout the application. It can hold any type of data, but in this case, it will hold the state managed by a reducer.

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
