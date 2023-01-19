import { useContext } from "react";
import { LanguageContext } from "./languageContext";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { languageOptions } from "./languageOptions";

export const LanguageSelector = () => {
  // @ts-ignore
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // @ts-ignore
    const handleLanguageChange = e => userLanguageChange(e.target.value);


  return (
    <>
      <Select defaultValue="en" onChange={handleLanguageChange} value={userLanguage}>
        {Object.entries(languageOptions).map(([id, name]) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
