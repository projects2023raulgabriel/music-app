import react, { createContext } from "react";
import { dictionaryList, languageOptions } from "./languageOptions";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});