import { Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavDrawer from "./NavDrawer";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <Container>
      <Stack
        direction={"row"}
        sx={{
          p: { xs: 1.5, md: 2 },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLogo />
        {/* For mobile screens only */}
        <Box sx={{ display: { md: "none" } }}>
          <NavDrawer />
        </Box>
        <Stack
          direction={"row"}
          sx={{ display: { xs: "none", md: "flex", gap: 6 } }}
        >
          <NavButton name={"Home"} variant={"standard"} path={"/"} />
          <NavButton name={"About"} variant={"standard"} path={"/about"} />
          <NavButton
            name={"Projects"}
            variant={"standard"}
            path={"/projects"}
          />
          <Button>Github</Button>
        </Stack>
        {/* For mobile screens only */}
      </Stack>
    </Container>
  );
};

export default Navbar;
