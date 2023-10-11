import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Mission = () => {
  const data = [
    {
      description:
        "Since its founding in May 2019, the platform has grown to more than 20000 collaborators in over 120 countries, established over 195 impact hubs in over 80 countries, and doesn't stop growing.",
    },
    {
      description:
        "During this period, Omdena has worked with 220+ organizations on over 650 projects. Detecting wildfires in Brazil, fighting malaria outbreaks in Africa, and improving solar adoption in Singapore are just a tiny part of them.",
    },
    {
      description:
        "We empower the strength of the worldwide AI community and we work to bring all the talents together to develop and deploy solutions to real problems.",
    },
  ];
  return (
    <Box sx={{ width: "100%", p: 2, py: 6, bgcolor: "azure" }}>
      <Container>
        <Stack
          direction={"column"}
          sx={{ justifyContent: "space-between", alignItems: "start", gap: 4 }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              The Mission
            </Typography>
            <Typography variant="h4" sx={{ display: { md: "none" } }}>
              The Mission
            </Typography>
          </Box>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "start",
              gap: 4,
            }}
          >
            {data.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography>{item.description}</Typography>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Mission;
