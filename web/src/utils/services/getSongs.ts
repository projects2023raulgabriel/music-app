import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
import { api, musicStoryApi } from "../api";

const spotifyAccessToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

let spotify = new SpotifyWebApi();

const getCozySongs = async () => {
  spotify.setAccessToken(spotifyAccessToken);
  const res = await spotify.getRecommendations({
    limit: 1,
    seed_genres: "jazz",
    target_danceability: 0.555,
    target_loudness: 0.621,
    target_speechiness: 0.109,
    target_acousticness: 0.822,
    target_liveness: 0.182,
  });
  const songId = res.tracks[0].id;
  const songUrl = res.tracks[0].external_urls.spotify;
  const songName = res.tracks[0].name;
//   spotify.getAudioFeaturesForTrack(songId);
  console.dir(res);
};
// https://api.spotify.com/v1/recommendations?limit=10&market=PL&seed_artists=4NHQUGzhtTLFvgF5SZesLK%2C5FF8xJSW4qUVU8bk79KYLT&seed_genres=classical&seed_tracks=0c6xIDDpzE81m2q797ordA%2C2Q9nA56DKKJhj4cHMbHlAS

const getRevoltedSongs = async () => {
  const res = await api.get("trackvalence=330000");
  return res.data;
};

const getCalmSongs = async () => {
  const res = await api.get("trackarousal=100000");
  return res.data;
};

const getFeelingGoodSongs = async () => {
  const res = await api.get("trackvalence=900000");
  return res.data;
};

const getMusicStory = async () => {
  const res = await musicStoryApi.get("/");
  console.log(res.data, res);
  return res.data;
};

export {
  getCalmSongs,
  getFeelingGoodSongs,
  getRevoltedSongs,
  getMusicStory,
};

// emotions to take into account:
