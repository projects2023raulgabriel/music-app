import React from "react";
import { BsSpotify } from "react-icons/bs";
import { Button } from "../components/Button";

function Login() {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  return (
    <div className="App">
      <header className="py-3 grid grid-cols-1 items-center bg-slate-800 justify-between">
        <span className="text-white text-lg text-center">
          {" "}
          Login to play the song
        </span>
        <span className="text-white text-center">
          {" "}
          (the song info and player will be displayed below).{" "}
        </span>
        <Button
          onClick={() => {
            window.open(
              `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`,
              "_blank"
            );
          }}
          styles="text-white mt-2 hover:text-indigo-500 duration-300"
        >
          Log in to Spotify{" "}
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
