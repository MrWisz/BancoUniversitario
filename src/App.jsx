import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Objectives from "./pages/Objectives.jsx";
import Login from "./pages/Login.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import Register from "./pages/Register.jsx";
import HomeUser from "./pages/HomeUser.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
      case "/objectives":
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
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/home-user":
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
      <Route path="/objectives" element={<Objectives />} />
      <Route path="/login" element={<Login />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home-user" element={<ProtectedRoute><HomeUser /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;