import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to={"/"}>
      <Box>
        <img src="/logo.png" alt="Omdena logo" className="h-8 md:h-[2.5rem]" />
      </Box>
    </Link>
  );
};

export default NavLogo;
