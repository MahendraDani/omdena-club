import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ name, path }) => {
  return (
    <Link to={path}>
      <Typography variant="body2">{name}</Typography>
    </Link>
  );
};

export default FooterLinks;
