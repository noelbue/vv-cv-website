import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Education } from "./pages/Education";
import { Expertise } from "./pages/Expertise";
import { About } from "./pages/About";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/expertise" element={<Expertise />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
