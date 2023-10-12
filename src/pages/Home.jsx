import { Stack } from "@mui/material";
import React from "react";
import Landing from "../components/Home/Landing";
import Footer from "../components/Footer/Footer";
import NavbarMain from "../components/Navbar/NavbarMain";
const Home = () => {
  return (
    <>
      <Stack>
        <NavbarMain />
        <Landing />
        <Footer />
        <div className="w-full h-screen fixed -z-50 inset-0 bg-gradient-to-br from-purple-100 from-10% via-purple-300 to-purple-100 opacity-20 blur-lg" />
      </Stack>
    </>
  );
};

export default Home;
