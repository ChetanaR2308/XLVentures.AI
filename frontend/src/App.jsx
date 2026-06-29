import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UploadTranscript from "./pages/UploadTranscript";
import Results from "./pages/Results";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="app-root">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadTranscript />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;