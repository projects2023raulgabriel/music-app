import { useState, useContext, ReactNode } from "react";
import { LanguageContext } from "./languageContext";
import { languageOptions, dictionaryList } from "./languageOptions";

// it provides the language context to app
export function LanguageProvider({ children }: { children: ReactNode }) {
  let defaultLanguage = window.localStorage.getItem("rcml-lang");
  let [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

  let provider = {
    userLanguage, // @ts-ignore
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected: string | number) => {
      // @ts-ignore
      let newLanguage = languageOptions[selected] ? selected : "en"; // @ts-ignore
      setUserLanguage(newLanguage); // @ts-ignore
      window.localStorage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    // @ts-ignore
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}//