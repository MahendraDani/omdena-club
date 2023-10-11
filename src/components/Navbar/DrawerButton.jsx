import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DrawerButton = ({ childern, name, path }) => {
  return (
    <Link to={path}>
      <ListItem key={name} disablePadding>
        <ListItemButton>
          <ListItemIcon>{childern}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default DrawerButton;
