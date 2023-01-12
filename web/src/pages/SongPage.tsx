import axios from "axios";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { getCalmSongs, getMusicStory } from "../utils/services/getSongs";

export const SongPage = () => {

  //return
  return (
    <>
      <Navbar />
      <div className="w-full">
      {/* <Button
        border=""
        color="blue"
        height="100px"
        onClick={getCalmSongs}
        radius=""
        width="100px"
        children=""
        key={"key"}
      />
      <button onClick={getMusicStory} className="text-center ml-96">
        {" "}
        2{" "}
      </button> */}
     </div>
      <Footer />
    </>
  );
};
