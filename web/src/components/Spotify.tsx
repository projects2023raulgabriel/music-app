import React from "react";
import { BsSpotify } from "react-icons/bs";
import { Text } from "./Text";

export const Spotify = () => {
  return (
    <div className="w-full bg-[#1DB954]">
      <nav className="grid grid-cols-3 gap-1">
        <div className="justify-center self-center ml-2 ultrawide:my-2">
          <BsSpotify className="text-5xl hover:text-white duration-300 cursor-pointer" onClick={()=>window.open("https://spotify.com")} />
        </div>
        <div className="justify-center self-center text-center my-2 tablet:text-md text-xs">
          <Text tid="spotifyDisclaimerMiddleText" /> 
        </div>
        <div className="justify-center self-center text-right my-2 text-xs">
            <Text tid="spotifyDisclaimerRightText" />
        </div>
      </nav>
    </div>
  );
};
