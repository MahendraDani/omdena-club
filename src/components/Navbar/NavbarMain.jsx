import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const NavbarMain = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "white",
        zIndex: 100,
      }}
    >
      <Navbar />
    </Box>
  );
};

export default NavbarMain;
