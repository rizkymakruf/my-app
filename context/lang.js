import { useState, createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {

  const [ lang, setLang ] = useState("id");

  const contextValue = {
    status: {
      lang
    },
    act: {
      setLang
    }
  };

  return (
    <LangContext.Provider value={ contextValue }>
      { children }
    </LangContext.Provider>
  );

};
