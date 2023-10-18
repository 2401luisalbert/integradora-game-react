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
      <NavbarComponent />
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/history" exact="true" element={<History />} />
        <Route path="/characters" exact="true" element={<Characters />} />
        <Route path="/mechanics" exact="true" element={<GameMechanics />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default AppRouter;
