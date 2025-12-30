import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
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
      <LanguageProvider>
        <div className="app-container">
          <NavBar />
          <main className="main-content">
            <Routes>
              {/* English Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/expertise" element={<Expertise />} />

              {/* German Routes */}
              <Route path="/de" element={<Home />} />
              <Route path="/de/about-me" element={<About />} />
              <Route path="/de/experience" element={<Experience />} />
              <Route path="/de/education" element={<Education />} />
              <Route path="/de/expertise" element={<Expertise />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
