import { Box } from "@mui/material";
import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <div className="w-full h-screen fixed -z-50 inset-0 bg-gradient-to-br from-purple-100 from-10% via-purple-300 to-purple-100 opacity-20 blur-lg" />
      </Box>
    </>
  );
}

export default App;
