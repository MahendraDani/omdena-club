import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ name, variant, path }) => {
  return (
    <Link to={path}>
      <Button variant={variant}>{name}</Button>
    </Link>
  );
};

export default NavButton;
