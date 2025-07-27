import "./App.css";
import { Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
