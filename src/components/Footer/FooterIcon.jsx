import { Box, IconButton, Link } from "@mui/material";
import React from "react";

const FooterIcon = ({ icon, href }) => {
  return (
    <Box>
      <Link href={href} target="_blank">
        <IconButton>{icon}</IconButton>
      </Link>
    </Box>
  );
};

export default FooterIcon;
