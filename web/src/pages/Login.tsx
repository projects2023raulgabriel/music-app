import React, { useContext, useState } from "react";
import { BsSpotify } from "react-icons/bs";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { LanguageContext } from "../context/languages/languageContext";

function Login() {
  const [clickTest, setClickTest] = useState(<></>);
  const { dictionary } = useContext(LanguageContext);
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="App">
      <header className="py-3 grid grid-cols-1 items-center bg-slate-800 justify-between">
        <span className="text-white text-lg text-center">
          {" "}
          <Text tid="loginPageFirstSpan" />
        </span>
        <span className="text-white text-center">
          {" "}
          
          <Text tid="loginPageSecondSpan" />{" "}
        </span>
        <Button
          onClick={() => {
            window.open(
              `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
            );
          }}
          styles="text-white mt-2 hover:text-indigo-500 duration-300"
        >
        <Text tid="loginButton" />  {" "}
        </Button>{" "}
        <div className="flex text-2xl justify-center">
          {" "}
          <BsSpotify className="text-center text-white justify-center self-center" />
        </div>
      </header>
    </div>
  );
}

export default Login;
