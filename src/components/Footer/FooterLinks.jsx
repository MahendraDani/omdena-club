import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ name, path }) => {
  return (
    <Link to={path}>
      <Typography
        variant="body1"
        sx={{
          color: "#1D0C18",
          ":hover": { textDecoration: "underline" },
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default FooterLinks;
