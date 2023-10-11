import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "space-evenly",
          py: 10,
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
          <Box sx={{ color: "gray.main" }}>
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
              sx={{
                textAlign: "center",
                display: {
                  xs: "none",
                  md: "block",
                  fontWeight: "700",
                  width: "100%",
                  fontSize: "5rem",
                },
              }}
            >
              Artificial Intelligence for{" "}
              <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typography sx={{ fontWeight: "800", fontSize: "5rem" }}>
                  {"Impact"}
                </Typography>
              </div>
            </Typography>
          </Box>
          <Box
            sx={{ width: { md: "75%" }, textAlign: "center", mt: { xs: 5 } }}
          >
            <Typography variant="body1" sx={{ color: "gray" }}>
              Building advanced AI solutions for impact-driven organizations
              with talented Engineers passionate about making this world a
              better place. We're on a mission to provide the global community
              of AI engineers with a platform to gather and collaboratively
              build solutions to real-world problems.
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Link to={"/projects"}>
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
              Projects
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};

export default Landing;
