import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Home/Landing";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Stack>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            right: 0,
            left: 0,
            bgcolor: "azure",
          }}
        >
          <Navbar />
        </Box>
        <Landing />
        <Footer />
      </Stack>
    </>
  );
};

export default Home;
