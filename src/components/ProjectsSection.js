import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Image, Divider } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
    github: "https://github.com/nayoung3669",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    github: "https://github.com/nayoung3669",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    github: "https://github.com/nayoung3669",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    github: "https://github.com/nayoung3669",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1c2b51"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
    >
      <Divider width="100%"/>
      <Heading as="h1" pt="60px" >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            github={project.github}
          />
        ))}
      </Box>
      <Divider  paddingBottom={100} width="100%"/>
    </FullScreenSection>
  );
};

export default ProjectsSection;
