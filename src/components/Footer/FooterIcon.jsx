import { Box, IconButton, Link } from "@mui/material";
import React from "react";

const FooterIcon = ({ icon, href }) => {
  return (
    <Box>
      <Link href={href} target="_blank">
        {/* <IconButton color="black">{icon}</IconButton> */}
        <button className="text-[#38182F]">{icon}</button>
      </Link>
    </Box>
  );
};

export default FooterIcon;
