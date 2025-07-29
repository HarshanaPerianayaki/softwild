// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";
import MapPage from "./pages/Map";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
