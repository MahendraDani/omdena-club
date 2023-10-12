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
      </Stack>
    </>
  );
};

export default Home;
