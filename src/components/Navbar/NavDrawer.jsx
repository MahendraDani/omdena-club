import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
} from "@mui/material";
import { Home, People, Engineering, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import DrawerButton from "./DrawerButton";

const NavDrawer = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <DrawerButton name={"Home"} childern={<Home />} path={"/"} />
        <DrawerButton name={"About"} childern={<People />} path={"/about"} />
        <DrawerButton
          name={"Projects"}
          childern={<Engineering />}
          path={"/projects"}
        />
      </List>
    </Box>
  );
  return (
    <Box>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Menu sx={{ color: "purple.primary" }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default NavDrawer;
