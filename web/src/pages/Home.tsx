import { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import ReactPlayer from "react-player";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
export const Home = () => {
  const [song, setSong] = useState("");

  const spotifyAccessToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

  let spotify = new SpotifyWebApi();

  const getCozySongs = async () => {
    spotify.setAccessToken(spotifyAccessToken);
    const res = await spotify.getRecommendations({
      limit: 5,
      seed_genres: "jazz",
      target_danceability: 0.555,
      target_loudness: 0.621,
      target_speechiness: 0.109,
      target_acousticness: 0.822,
      target_liveness: 0.182,
    })
    // .then((data)=>{
    //   console.log(data.tracks[0])
    //   // setSong(data.tracks[0].external_urls.spotify)
    // })
    const songId = res.tracks[0].id;
    const songUrl = res.tracks[0].external_urls.spotify;
    const songName = res.tracks[0].name;
    //   spotify.getAudioFeaturesForTrack(songId);
    console.dir(res.tracks[0].external_urls.spotify, songId, songName, songUrl);
    setSong(res.tracks[0].external_urls.spotify);
    console.log("segundo console log", song);
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <div className="">
          {/** Div Player para setar sentimento */}
          <div className="flex justify-center mt-10" onClick={getCozySongs}>
            {" "}
            <span className="text-white absolute pt-3 z-10 cursor-pointer"> Setar som</span>
            <Button
              border="1px solid white"
              color="purple"
              height="50px"
              onClick={() => {}}
              radius="5px"
              width="120px"
              key="cozy-song-button"
              zIndex="4"
            />
          </div>
        </div>

        <div>
          {/** Div Player para mostrar músicas sugeridas + link para ppágina da música */}
          {
            //fazer o map com base na música selecionada do usuário
          }
          <ReactPlayer url={song} />
        </div>
      </div>
      <Footer />
    </>
  );
};
