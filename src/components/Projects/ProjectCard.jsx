import { ArrowRightAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ title, description, githubUrl }) => {
  return (
    <Container
      sx={{
        width: { md: "70%" },
        mt: 4,
        transition: "all 0.3s ease-in",
      }}
    >
      <Stack
        sx={{
          p: 4,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { md: 12 },
          alignItems: { xs: "center", md: "Start" },
          border: "1px solid gray",
          borderRadius: 2,
          background: "#fff",
          boxShadow: "2",
        }}
      >
        <img src="/road.png" alt="Road" className="w-64 h-64 rounded-full" />
        <Stack
          sx={{
            textAlign: { xs: "center", md: "start" },
            gap: { xs: 1.5, md: 3 },
          }}
        >
          <Typography variant="h5" sx={{ color: "purple.primary" }}>
            {title}
          </Typography>
          <Typography sx={{ color: "gray" }}>{description}</Typography>
          <Box>
            <Link href={githubUrl} target="_blank">
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
      </Stack>
    </Container>
  );
};

export default ProjectCard;
