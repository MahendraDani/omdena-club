import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import FooterIcon from "./FooterIcon";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Stack
        direction={"row"}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Stack
          direction={"column"}
          sx={{
            justifyContent: "space between",
            alignItems: "start",
            gap: 2,
          }}
        >
          <Box>
            <img src="/logo.png" alt="Omdena" className="h-8" />
          </Box>
          <Stack direction={"row"}>
            <FooterIcon
              href={"https://github.com/MahendraDani"}
              icon={<GitHub />}
            />
            <FooterIcon
              href={"https://linkedin.com/in/mahendra-dani"}
              icon={<LinkedIn />}
            />
          </Stack>
          <Box>
            <Typography variant="body2">Developed by Mahendra Dani</Typography>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          sx={{ justifyContent: "space-between", alignItems: "start", gap: 1 }}
        >
          <FooterLinks path={"/"} name={"Home"} />
          <FooterLinks path={"/about"} name={"About"} />
          <FooterLinks path={"/projects"} name={"Projects"} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
