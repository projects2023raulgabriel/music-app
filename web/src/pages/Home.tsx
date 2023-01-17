import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import ReactPlayer from "react-player";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TrackObjectSimplified } from "./interfaces";
import { generatePath, Link, resolvePath } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Home = () => {
  // main state (the song(s) to be suggested)
  const [songs, setSongs] = useState<TrackObjectSimplified[]>([]);
  // configuring spotify wrapper to be used
  const spotifyAccessToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

  let spotify = new SpotifyWebApi();

  spotify.setAccessToken(spotifyAccessToken);
  // simple bubble sorting algorithm to get some random songs from the spotify api
  function swapTwo(list: TrackObjectSimplified[], a: number, b: number) {
    [list[a], list[b]] = [list[b], list[a]];
  }
  function sortTwo(list: TrackObjectSimplified[], a: number, b: number) {
    if (list[a] < list[b]) {
      swapTwo(list, a, b);
    }
  }
  function bubbleSort(arr: TrackObjectSimplified[]): TrackObjectSimplified[] {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length + i - 1; j++) {
        sortTwo(arr, j + 1, j);
      }
    }
    return arr;
  }
  // getting the songs themselves
  const getCozySongs = async () => {
    const res = await spotify.getRecommendations({
      limit: 50,
      seed_genres: "jazz,lofi,classical",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    });
    const suggestedSongs = bubbleSort(res.tracks);

    const firstFive = suggestedSongs.slice(-1);
    setSongs(firstFive);
  };

  const getAngrySongs = async () => {
    const res = await spotify.getRecommendations({
      limit: 50,
      seed_genres: "rap,rock-n-roll,heavy-metal,punk-rock,metal",
      target_danceability: 0.53,
      target_loudness: 0.82,
      target_speechiness: 0.2,
      target_acousticness: 0.4,
      target_liveness: 0.3,
    });
    const suggestedSongs = bubbleSort(res.tracks);

    const firstFive = suggestedSongs.slice(-1);
    setSongs(firstFive);
  };

  const getSadSongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 50,
      seed_genres: "indie,punk,sad,emo,indie-pop",
      target_danceability: 0.5,
      target_loudness: 0.23,
      target_speechiness: 0.47,
      target_acousticness: 0.7,
      target_liveness: 0.1,
    });

    const suggestedSongs = bubbleSort(res.tracks);

    const firstFive = suggestedSongs.slice(-1);
    setSongs(firstFive);
  };

  const getDreamerSongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 50,
      seed_genres: "soul,sleep,chill,alternative,disney",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    });
    const suggestedSongs = bubbleSort(res.tracks);
    console.log(res);
    const firstFive = suggestedSongs.slice(-1);
    setSongs(firstFive);
  };
  const getExcitedSongs = async () => {
    const res = await spotify.getRecommendations({
      limit: 50,
      seed_genres: "party,dance,electronic,dubstep,happy",
      target_danceability: 0.73,
      target_loudness: 0.82,
      target_speechiness: 0.14,
      target_acousticness: 0.1,
      target_liveness: 0.43,
    });
    console.log(res.tracks[0].artists);
    const suggestedSongs = bubbleSort(res.tracks);

    const firstFive = suggestedSongs.slice(-1);
    setSongs(firstFive);
  };
  const nameToLink = (name: string) => {
    const trimmedName = name.toLowerCase();
    const link = trimmedName
      .replace(/\s/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return link;
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex justify-center flex-col items-center ">
          <h1 className="mt-6 text-2xl">Music RecomendApp</h1>
          <label id="demo-simple-select-label">
            Você está se sentindo uma pessoa:
          </label>
          <div className="hidden pocket:flex phone:flex">
            <MdArrowDropDown
              className="text-black flex absolute self-center mt-1"
              style={{ marginLeft: "5.7rem" }}
            />
            <select
              id="demo-simple-select"
              className="text-black text-left flex w-fit self-center mt-3 rounded-md bg-white border-[#1DB954] p-2.5 border shadow-sm outline-none appearance-none active:border-cyan-600"
            >
              <option
                value={10}
                onClick={getAngrySongs}
                className="text-left flex flex-col justify-center rounded-md"
              >
                Raivosa
              </option>
              <option
                value={20}
                onClick={getExcitedSongs}
                className="text-left flex flex-col justify-center rounded-md"
              >
                Animada
              </option>
              <option
                value={30}
                onClick={getDreamerSongs}
                className="flex flex-col justify-center text-left rounded-md"
              >
                Sonhadora
              </option>
              <option
                value={30}
                onClick={getSadSongs}
                className="flex flex-col justify-center text-left rounded-md"
              >
                Triste
              </option>
              <option
                value={30}
                onClick={getCozySongs}
                className="flex flex-col justify-center text-left rounded-md"
              >
                Calma
              </option>
            </select>
          </div>
          <Box
            sx={{ minWidth: "21rem", maxWidth: "22rem" }}
            className="phone:hidden pocket:hidden"
          >
            <FormControl fullWidth className="mt-4">
              <InputLabel id="demo-simple-select-label">
                Você está se sentindo uma pessoa:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sentimentos"
              >
                <MenuItem value={10} onClick={getAngrySongs}>
                  Raivosa
                </MenuItem>
                <MenuItem value={20} onClick={getExcitedSongs}>
                  Animada
                </MenuItem>
                <MenuItem value={30} onClick={getDreamerSongs}>
                  Sonhadora
                </MenuItem>
                <MenuItem value={40} onClick={getSadSongs}>
                  Triste
                </MenuItem>
                <MenuItem value={50} onClick={getCozySongs}>
                  Calma
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="items-center mt-10 divide-y">
          {songs.map((song, key) => {
            return (
              <>
                <div className="grid grid-cols-3 tablet:grid-cols-1 phone:grid-cols-1 pocket:grid-cols-1 px-4 bg-[#1DB954] pt-2 desktop:text-lg pb-3">
                  <title
                    className="text-lg flex py-1 laptop:text-center laptop:justify-center tablet:justify-center tablet:text-center phone:justify-center phone:text-center pocket:justify-center pocket:text-center phone:text-lg pocket:text-lg"
                    key={key}
                  >
                    {" "}
                    <div>
                      <Link
                        to={resolvePath(
                          generatePath("/songs/:link", {
                            link: nameToLink(song.name),
                          }),
                          "../../../"
                        )}
                        className="flex-col"
                        target="_parent"
                        key={song.id}
                      >
                        {" "}
                        {song.name}
                      </Link>{" "}
                      <br />
                     <span className="flex-col flex"> {song.artists[0].name}</span>
                    </div>{" "}
                  </title>
                  <span className="hidden"> {song.id} </span>
                  <span
                    className="text-center py-2 hover:text-white duration-300 text-md underline self-center cursor-pointer"
                    onClick={() =>
                      window.open(`${song.external_urls.spotify}`, "_blank")
                    }
                  >
                    Listen on Spotify
                  </span>
                  <a
                    href={song.preview_url}
                    target="_blank"
                    className="flex flex-col text-center self-center"
                  >
                    {" "}
                    Listen preview <br /> (if it doesn't work, the song may not
                    have a preview available).
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
