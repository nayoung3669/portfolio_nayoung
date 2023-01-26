import React from "react";
import { Heading, VStack, Text, Box, Wrap, Button, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import bioSrc from './bio.jpg';


const greeting = "Hello, I'm" 
const name = "Nayoung";
const bio1 = "A front-end developer ";


const LandingSection = () => (
  <FullScreenSection id="introduction-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1c2b51"
  >
    <VStack spacing={10} align="stretch" textAlign="center" >
      <Image src={bioSrc} alt='nayoungKim' borderRadius = "full" height="300px" width="320px" />  
      <Box whiteSpace="nowrap"  >
        <Wrap >
          <Heading as="h1" >{greeting}</Heading>
          <Heading color="#FF3D96" >{name}</Heading>
        </Wrap>
        <br />
        <Text fontSize='3xl' >{bio1}</Text>
      </Box>
      <HStack spacing={8} align="center">
        <Button bgColor="#FF3D96"  size="md" height="50px" _hover={{ border:"2px", borderColor: '#FF3D96', bg: "#1c2b51"}} >Download CV</Button>
        <Button bgColor="#FF3D96" size="md" _hover={{ border:"2px", borderColor: '#FF3D96', bg: "#1c2b51"}} height="50px" >View Projects</Button>
      </HStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
