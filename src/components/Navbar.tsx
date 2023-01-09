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

  const [ref, inView] = useInView({
    rootMargin: "0px",
    threshold: 1,
    initialInView: true,
    delay: 10,
  });

  const themeProvider = createTheme(
    adaptV4Theme({
      palette: {
        mode: "dark",
      },
    })
  );

  return (
    <>
      {!inView && (
        <section className="top-0 sticky z-30">
          <div className="bg-slate-800 text-white text-3xl pb-3 top-0 lazy pt-3">
            <h1 className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 text-center">
              <NavLink to="/"> Home </NavLink>
            </h1>

            <Box sx={{ flexGrow: 0 }}>
            <IconButton
              title="Mudar tema do site"
              onClick={() => changeTheme()}
              size="large"
            >
              {theme.palette.mode === "light" ? (
                <Brightness3Icon />
              ) : (
                <EmojiObjectsIcon />
              )}
            </IconButton>
          </Box>
          </div>
        </section>
      )}
      <section className="default top" ref={ref}>
        <div className="bg-slate-800 text-white text-3xl pb-3">
          <h1 className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 text-center">
            <Link to="/" className="items-center justify-center">
              {" "}
              Home{" "}
            </Link>
          </h1>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              title="Mudar tema do site"
              onClick={() => changeTheme()}
              size="large"
            >
              {theme.palette.mode === "light" ? (
                <Brightness3Icon />
              ) : (
                <EmojiObjectsIcon />
              )}
            </IconButton>
          </Box>
        </div>
      </section>
    </>
  );
};
