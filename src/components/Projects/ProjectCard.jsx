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
          border: "2px solid gray",
          borderRadius: 2,
          background: "azure",
        }}
      >
        <img src="/road.png" alt="Road" className="w-64 h-64 rounded-full" />
        <Stack
          sx={{
            textAlign: { xs: "center", md: "start" },
            gap: { xs: 1.5, md: 3 },
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography>{description}</Typography>
          <Box>
            <Link href={githubUrl} target="_blank">
              <Button>Learn More</Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProjectCard;
