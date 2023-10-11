import { Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavDrawer from "./NavDrawer";
import NavButton from "./NavButton";
import { GitHub } from "@mui/icons-material";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          sx={{ display: { xs: "none", md: "flex", gap: 10 } }}
        >
          <NavButton name={"About"} path={"/about"} />
          <NavButton name={"Projects"} path={"/projects"} />
          <Button
            startIcon={<GitHub />}
            variant="outlined"
            sx={{
              border: "2px solid",
              borderRadius: 10,
              borderColor: "gray.main",
              color: "gray.main",
              transition: "all 0.5 ease-in",
              ":hover": {
                border: "2px solid",
                borderRadius: 10,
                borderColor: "gray.main",
                color: "white",
                backgroundColor: "gray.main",
              },
            }}
          >
            Github
          </Button>
        </Stack>
        {/* For mobile screens only */}
      </Stack>
    </Container>
  );
};

export default Navbar;
