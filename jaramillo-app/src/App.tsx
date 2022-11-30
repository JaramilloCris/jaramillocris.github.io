import HomePage from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ProyectsPage from "./pages/proyects/ProyectsPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/proyects" element={<ProyectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
