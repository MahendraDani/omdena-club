import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard from "../components/Projects/ProjectCard";
import Footer from "../components/Footer/Footer";

const Projects = () => {
  const projects = [
    {
      title: "AI Based Road Inspection System",
      description:
        "The project aims to address the labor-intensive and time-consuming process of road inspections by implementing an AI-based road inspection system. This system will use machine learning to detect various road defects and abnormalities through video data captured by cameras on different roads",
      githubUrl: "https://github.com/OmdenaAI/bhopal-mexico-ai-road-inspection",
    },
    {
      title:
        "Monitoring the Water Quality in Bhopal Region using Satellite Imagery and GIS Techniques",
      description:
        "The 1984 Bhopal gas tragedy severely impacted water quality in the City of Lakes. High pollutant levels, including persistent organic pollutants and toxic byproducts of the disaster, pose serious environmental and health risks. The project's goal is to develop a Machine Learning system using satellite imagery and GIS to monitor and predict water quality issues, allowing for timely intervention and mitigation.",
      githubUrl:
        "https://github.com/OmdenaAI/omdena-bhopal-water-quality-monitoring",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "white",
          zIndex: 100,
        }}
      >
        <Navbar />
      </Box>
      <Box>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
              />
              ;
            </div>
          );
        })}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Projects;
