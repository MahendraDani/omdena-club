import { Box } from "@mui/material";
import React from "react";
import NavbarMain from "../components/Navbar/NavbarMain";
import AboutIntro from "../components/About/AboutIntro";
import Mission from "../components/About/Mission";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <Box>
      <NavbarMain />
      <AboutIntro />
      <Mission />
      <Box sx={{ mt: 16 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default About;
