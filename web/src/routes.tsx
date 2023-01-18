import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Spotify } from "./components/Spotify";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { SongPage } from "./pages/SongPage";
import Token from "./pages/Token";
import WebPlayback from "./pages/WebPlayback";

export const RoutesList = () => {
  return (
    <>
      <Spotify />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs/:link" element={<SongPage />} />
          <Route path="/play-song" element={<WebPlayback/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};
