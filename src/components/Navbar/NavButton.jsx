import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ name, path }) => {
  return (
    <Link to={path}>
      <Button
        variant={"outlined"}
        sx={{
          border: "2px solid",
          borderRadius: 10,
          borderColor: "purple.primary",
          color: "purple.primary",
          transition: "all 0.3s ease-in  ",
          ":hover": {
            border: "2px solid",
            borderRadius: 10,
            borderColor: "purple.primary",
            bgcolor: "purple.primary",
            color: "white",
          },
        }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default NavButton;
