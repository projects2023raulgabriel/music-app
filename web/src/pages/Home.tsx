import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import WebPlayback from "./WebPlayback";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TrackObjectSimplified } from "../interfaces";
import { generatePath, Link, resolvePath } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { IToken } from "../interfaces";
import Login from "./Login";
import { BsSpotify } from "react-icons/bs";
import { Text } from "../components/Text";
import Carousel from "react-material-ui-carousel";

export const Home = () => {
  // login and spotify auth
  const [token, setToken] = useState<IToken>();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      //@ts-ignore
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    //  @ts-ignore
    setToken(token);
  }, []);
  const logout = () => {
    // @ts-ignore
    setToken(undefined);
    window.localStorage.removeItem("token");
    // window.location.reload();
  };
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

    const firstFive = suggestedSongs.slice(-5);
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

    const firstFive = suggestedSongs.slice(-5);
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

    const firstFive = suggestedSongs.slice(-5);
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
    const firstFive = suggestedSongs.slice(-5);
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

    const firstFive = suggestedSongs.slice(-5);
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
    <div className="relative min-h-full mb-96">
      <div className="w-full ">
        <div className="flex justify-center flex-col items-center ">
          <h1 className="mt-6 text-2xl">Music RecomendApp</h1>
          <label id="demo-simple-select-label">
            <Text tid="homeLabelText" />
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
                <Text tid="firstOptionMood" />
              </option>
              <option
                value={20}
                onClick={getExcitedSongs}
                className="text-left flex flex-col justify-center rounded-md"
              >
                <Text tid="secondOptionMood" />
              </option>
              <option
                value={30}
                onClick={getDreamerSongs}
                className="flex flex-col justify-center text-left rounded-md"
              >
                <Text tid="thirdOptionMood" />
              </option>
              <option
                value={30}
                onClick={getSadSongs}
                className="flex flex-col justify-center text-left rounded-md"
              >
                <Text tid="fourthOptionMood" />
              </option>
              <option
                value={30}
                onClick={getCozySongs}
                className="flex flex-col justify-center text-left rounded-md"
              >
                <Text tid="fifthOptionMood" />{" "}
              </option>
            </select>
          </div>
          <Box
            sx={{ minWidth: "21rem", maxWidth: "22rem" }}
            className="phone:hidden pocket:hidden"
          >
            <FormControl fullWidth className="mt-4">
              <InputLabel id="demo-simple-select-label">
                <Text tid="homeLabelText" />
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sentimentos"
              >
                <MenuItem value={10} onClick={getAngrySongs}>
                  <Text tid="firstOptionMood" />
                </MenuItem>
                <MenuItem value={20} onClick={getExcitedSongs}>
                  <Text tid="secondOptionMood" />
                </MenuItem>
                <MenuItem value={30} onClick={getDreamerSongs}>
                  <Text tid="thirdOptionMood" />
                </MenuItem>
                <MenuItem value={40} onClick={getSadSongs}>
                  <Text tid="fourthOptionMood" />
                </MenuItem>
                <MenuItem value={50} onClick={getCozySongs}>
                  <Text tid="fifthOptionMood" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        
          <div className="items-center mt-10 divide-y">
          <Carousel
          fullHeightHover={true} 
          swipe={false}
          navButtonsAlwaysInvisible={false}
          indicators={true}
          navButtonsAlwaysVisible={true}
          NextIcon="next" // Change the "inside" of the next button to "next"
          PrevIcon="prev" // Change the "inside of the prev button to "prev"
          className="mb-8"
        >
            {songs.map((song, key) => {
              return (
                <>
                  <div className="w-full flex items-center justify-center bg-[#1DB954]">
                    <div className="w-auto p-8 rounded overflow-hidden shadow-lg m-10">
                      <div className="">
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
                          {song.name}
                          <span className="flex-col flex">
                            {" "}
                            {song.artists[0].name}
                          </span>
                        </Link>{" "}
                        <p className="text-gray-700 text-base"></p>
                      </div>
                      <div className="flex items-center justify-center px-4 pt-4 space-x-20">
                        <span
                          className="text-center py-2 hover:text-white duration-300 text-md underline self-center cursor-pointer"
                          onClick={() =>
                            window.open(
                              `${song.external_urls.spotify}`,
                              "_blank"
                            )
                          }
                        >
                          <Text tid="songSecondColumn" />
                        </span>

                        <span
                          className="text-center py-2 hover:text-white duration-300 text-md underline self-center cursor-pointer"
                          onClick={() =>
                            window.open(`${song.preview_url}`, "_blank")
                          }
                        >
                          <Text tid="songThirdColumnBefore" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {!token ? (
                    <Login />
                  ) : (
                    <>
                      <div className="py-2 grid grid-cols-3 bg-slate-800 items-center justify-center">
                        <div className="grid-flow-col text-2xl ml-2 text-white self-center justify-center">
                          <>
                            {" "}
                            <BsSpotify className="text-[#1DB954]" />
                            {song.linked_from}
                          </>
                        </div>{" "}
                        <div className="text-white text-center">
                          <WebPlayback />
                        </div>
                        <nav className="text-center justify-end text-white grid z-10">
                          <span className="flex flex-row justify-between">
                            {" "}
                            Logout{" "}
                            <HiLogout
                              className=" ml-3 text-md self-center flex mr-5 cursor-pointer"
                              onClick={logout}
                            />
                          </span>
                        </nav>
                      </div>
                    </>
                  )}
                </>
              );
            })}
            </Carousel>
          </div>
        
      </div>
    </div>
  );
};
