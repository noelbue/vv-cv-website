import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Education } from "./pages/Education";
import { Expertise } from "./pages/Expertise";
import { About } from "./pages/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
    </Router>
  );
}

export default App;
