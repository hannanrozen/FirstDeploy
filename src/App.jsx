import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
