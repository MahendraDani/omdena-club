import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";

const AboutIntro = () => {
  return (
    <Container>
      <Stack
        direction={"column"}
        sx={{
          my: 12,
          mb: 2,
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          gap: 6,
        }}
      >
        <Box color={"gray.main"}>
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
        <Box sx={{ color: "gray" }}>
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
          {/* <Button variant="outlined">Learn More</Button> */}
          <Link href="https://omdena.com/about/" target="_blank">
            <Button
              endIcon={<ArrowRightAlt />}
              sx={{
                bgcolor: "purple.primary",
                px: 3,
                color: "white",
                border: "2px solid",
                borderColor: "purple.primary",
                borderRadius: 10,
                transition: "all 0.3s ease-in",
                ":hover": {
                  border: "2px solid",
                  borderColor: "purple.primary",
                  borderRadius: 10,
                  color: "purple.primary",
                },
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};

export default AboutIntro;
