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
      </Box>
    </>
  );
}

export default App;
