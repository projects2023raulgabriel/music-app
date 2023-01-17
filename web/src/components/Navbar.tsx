import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useChangeTheme } from "../context/darkMode";
import { createTheme, adaptV4Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export const Navbar = () => {
  const theme = useTheme();
  const changeTheme = useChangeTheme();

  const themeProvider = createTheme(
    adaptV4Theme({
      palette: {
        mode: "dark",
      },
    })
  );

  return (
    <>
      <div className="flex items-center justify-center flex-row">
        <div className="bg-slate-800 text-white text-3xl w-full pb-5">
          <h1 className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 text-center pt-3 ">
            <a href="/" className="">
              {" "}
              Home{" "}
            </a>
          </h1>
        </div>
          <Box className="bg-slate-800 flex items-center justify-center h-full p-3" style={{padding: "13.9px"}}>
            <IconButton
              title="Mudar tema do site"
              onClick={() => changeTheme()}
            >
              {theme.palette.mode === "light" ? (
                <Brightness3Icon />
              ) : (
                <EmojiObjectsIcon />
              )}
            </IconButton>
          </Box>
      </div>
    </>
  );
};
