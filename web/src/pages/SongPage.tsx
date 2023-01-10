import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { getCalmSongs } from "../utils/services/getSongs";

export const SongPage = () => {
  return (
    <>
      <Navbar />
      <div>SongPage</div>
      <Button
      border=""
      color="blue"
      height="100px"
      onClick={getCalmSongs}
      radius=""
      width="100px"
      children=""
      key={'key'}
      />
      <Footer />
    </>
  );
};
