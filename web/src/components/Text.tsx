import { useContext } from "react";
import { LanguageContext } from "../context/languages/languageContext";

export function Text({ tid }: any) {
  const languageContext = useContext(LanguageContext);
  //  @ts-ignore
  return languageContext.dictionary[tid] || tid;
}
