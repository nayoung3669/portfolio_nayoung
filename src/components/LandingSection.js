import React from "react";
import { Avatar, Heading, VStack, Text, Box, Wrap } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import bioSrc from './bio.jpg';


const greeting = "Hello, I'm" 
const name = "Nayoung";
const bio1 = "A Frontend Developer";


const LandingSection = () => (
  <FullScreenSection id="introduction-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1c2b51"
  >
    <VStack spacing={10} align="stretch" textAlign="left">
      <Image src={bioSrc} alt='nayoungKim' borderRadius = "full" height="300px" width="320px" />  
      <Box whiteSpace="nowrap">
        <Wrap>
          <Heading as="h1" >{greeting}</Heading>
          <Heading color="#FF3D96" >{name}</Heading>
        </Wrap>
      </Box>
      <Text fontSize='3xl' color="FF3D96" >{bio1}</Text>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
