import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import UploadTranscript from "./pages/UploadTranscript";
import Results from "./pages/Results";
import Footer from "./components/Footer";


function App() {
  return (
    <>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/upload" element={<UploadTranscript />} />
    <Route path="/results" element={<Results />} />
  </Routes>

  <Footer />
</>
  );
}

export default App;