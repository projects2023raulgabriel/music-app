import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <div >
          {/** Div Player para setar sentimento */}
        </div>

        <div>
          {/** Div Player para mostrar músicas sugeridas + link para ppágina da música */}
          {
            //fazer o map com base na música selecionada do usuário
          }
        </div>
      </div>
      <Footer />
    </>
  );
};
