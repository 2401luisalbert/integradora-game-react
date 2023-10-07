import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import History from "./views/History";
import Characters from "./views/Characters";
import GameMechanics from "./views/GameMechanics";
import NavbarComponent from "./components/global/NavbarComponent";
import FooterComponent from "./components/global/FooterComponent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/mechanics" element={<GameMechanics />} />
        </Routes>
        <FooterComponent/>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
