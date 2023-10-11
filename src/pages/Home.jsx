import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Home/Landing";
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
      </Stack>
    </>
  );
};

export default Home;
