import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Objetives from "./pages/Objetives.jsx";
import Login from "./pages/Login.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import RegistroDeUsuarios from "./pages/RegistroDeUsuarios.jsx";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/objetives":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/who-we-are":
        title = "";
        metaDescription = "";
        break;
      case "/registro-de-usuarios":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/objetives" element={<Objetives />} />
      <Route path="/login" element={<Login />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/registro-de-usuarios" element={<RegistroDeUsuarios />} />
    </Routes>
  );
}

export default App;
