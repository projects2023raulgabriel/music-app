import axios from "axios";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { getCalmSongs, getMusicStory } from "../utils/services/getSongs";

export const SongPage = () => {
  useEffect(() => {
    getSongName();
  }, []);

  // routing to product page
  const path = useResolvedPath("#");
  console.info(path);
  path.pathname === location.pathname;

  let { link } = useParams();

  // dev purposes to check path
  const getSongName = async () => {
    const res = window.location.pathname;
    console.log(res);
  };

  const linkToName = (link: string | undefined) => {
    const noDashName = link?.replace(/-/g, " ");
    let name = "";
    for (var i = 0; i < noDashName!.length; i++) {
      if (i === 0 || i === 8) {
        name += noDashName!.charAt(i).toUpperCase();
      } else {
        name += noDashName!.charAt(i).toLowerCase();
      }
    }
    return name;
  };
  //return
  return (
    <>
      <div className="w-full h-screen">
        {" "}
        <section className="grid grid-cols-3 gap-3 leading-5">
          <div className="flex flex-col self-center justify-center">
            <title className="flex">  Música atual:</title>
              <span className="">
              {linkToName(link)}
            </span>{" "}
          </div>
        </section>
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
    </>
  );
};
