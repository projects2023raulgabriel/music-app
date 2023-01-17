import React from "react";
import { BsSpotify } from "react-icons/bs";

export const Spotify = () => {
  return (
    <div className="w-full bg-[#1DB954]">
      <nav className="grid grid-cols-3 gap-1">
        <div className="justify-center self-center ml-2 ultrawide:my-2">
          <BsSpotify className="text-5xl hover:text-white duration-300 cursor-pointer" onClick={()=>window.open("https://spotify.com", "_blank")} />
        </div>
        <div className="justify-center self-center text-center my-2 tablet:text-md phone:text-sm pocket:text-xs">
            Content, media and audio made available by Spotify.
        </div>
        <div className="justify-center self-center text-right my-2 phone:text-sm pocket:text-xs">
            All content subject to Spotify Platform Terms and Conditions.
        </div>
      </nav>
    </div>
  );
};
