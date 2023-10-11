import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Landing = () => {
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "space-evenly",
          py: 16,
          alignItems: "center",
          height: "42rem",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            justifyContent: "start",
            alignItems: "center",
            width: { xs: "90%" },
            gap: { md: 2, xs: 1 },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ textAlign: "center", display: { md: "none" } }}
            >
              Artificial Intelligence for
              <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typography variant={"h4"} sx={{ fontWeight: "800" }}>
                  {"Impact"}
                </Typography>
              </div>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                display: { xs: "none", md: "block", fontWeight: "700" },
              }}
            >
              Artificial Intelligence for{" "}
              <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typography variant={"h2"} sx={{ fontWeight: "800" }}>
                  {"Impact"}
                </Typography>
              </div>
            </Typography>
          </Box>
          <Box
            sx={{ width: { md: "65%" }, textAlign: "center", mt: { xs: 5 } }}
          >
            <Typography variant="body1">
              Building advanced AI solutions for impact-driven organizations
              with talented Engineers passionate about making this world a
              better place. We're on a mission to provide the global community
              of AI engineers with a platform to gather and collaboratively
              build solutions to real-world problems.
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Button variant="standard">Projects</Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Landing;
