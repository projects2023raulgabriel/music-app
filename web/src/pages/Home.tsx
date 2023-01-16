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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Home = () => {
  const [song, setSong] = useState("");

  const spotifyAccessToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

  let spotify = new SpotifyWebApi();

  const getCozySongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 5,
      seed_genres: "trap,trance,techno,rock-n-roll,party",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    });
    const songId = res.tracks[0].id;
    const songUrl = res.tracks[0].external_urls.spotify;
    const songName = res.tracks[0].name;

    setSong(res.tracks[0].external_urls.spotify);

    console.log(song);
  };

  const getAngrySongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 5,
      seed_genres: "trap,trance,techno,rock-n-roll,party",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    });
    const songId = res.tracks[0].id;
    const songUrl = res.tracks[0].external_urls.spotify;
    const songName = res.tracks[0].name;

    console.dir(res.tracks[0].external_urls.spotify, songId);

    setSong(res.tracks[0].external_urls.spotify);
    console.log("segundo console log", song);
  };

  const getSadSongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 5,
      seed_genres: "trap,trance,techno,rock-n-roll,party",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    });
    const songId = res.tracks[0].id;
    const songUrl = res.tracks[0].external_urls.spotify;
    const songName = res.tracks[0].name;

    console.dir(res.tracks[0].external_urls.spotify, songId);

    setSong(res.tracks[0].external_urls.spotify);
    console.log("segundo console log", song);
  };

  const getDreamerSongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 5,
      seed_genres: "trap,trance,techno,rock-n-roll,party",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    });
    const songId = res.tracks[0].id;
    const songUrl = res.tracks[0].external_urls.spotify;
    const songName = res.tracks[0].name;

    console.dir(res.tracks[0].external_urls.spotify, songId);

    setSong(res.tracks[0].external_urls.spotify);
    console.log("segundo console log", song);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <div className="flex justify-center flex-col items-center ">
          <h1 className="mt-6 text-2xl">Music RecomendApp</h1>
          <Box sx={{ minWidth: "21rem", maxWidth: "22rem" }}>
            <FormControl fullWidth className="mt-4">
              <InputLabel id="demo-simple-select-label">
                Você está se sentindo uma pessoa:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sentimentos"
              >
                <MenuItem value={10} onClick={getCozySongs}>
                  Raivosa
                </MenuItem>
                <MenuItem value={20} onClick={getCozySongs}>
                  Animada
                </MenuItem>
                <MenuItem value={30} onClick={getCozySongs}>
                  Sonhadora
                </MenuItem>
                <MenuItem value={30} onClick={getCozySongs}>
                  Triste
                </MenuItem>
                <MenuItem value={30} onClick={getCozySongs}>
                  Calma
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className=" bg-red-500 flex justify-center flex-col items-centerflex justify-center flex-col items-center">
          <SpotifyPlayer
            uris={song}
            token="BQCtLkmmwRGE0hNqZTTHJQo9xRmHu59CdkQ5b2dp-WR6BWr-dppCHdNpTaanyfbg9VNjd1KP77fZwdBGIp-QifJKs5ZPZAYbJ1zEx3qkOm9xAmelcp3dZC4sPJNncE4sMabZJmcPhNuW__nQio6sEg3bN6oGG3m4vFMwVffVhzHT-3KS1qsvNKSLdfgel4TuG2YDzcVB9LfKor41vk5AKHI"
          />
          ;
        </div>
      </div>
      <Footer />
    </>
  );
};
