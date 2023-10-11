import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const AboutIntro = () => {
  return (
    <Container>
      <Stack
        direction={"column"}
        sx={{
          my: 12,
          mb: 16,
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          gap: 6,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            fontWeight={700}
            sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}
          >
            AI by the people, for the people
          </Typography>
          <Typography
            fontWeight={600}
            sx={{
              width: "90%",
              mx: "auto",
              display: { md: "none" },
              textAlign: "center",
              fontSize: "2.5rem",
            }}
          >
            AI by the people, for the people
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ width: "90%", mx: "auto", textAlign: "center" }}
          >
            We're on a mission to provide the global community of AI engineers
            with a platform to gather and collaboratively build solutions to
            real-world problems.
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined">Learn More</Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default AboutIntro;
