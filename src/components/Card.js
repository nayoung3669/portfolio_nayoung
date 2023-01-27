import { Button, Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" borderRadius="10%" p='15' border="2" borderColor="black" >
      <Image src={imageSrc} borderRadius="10%" />
          <Heading as="h3" size="lg" color="#212121" >{title}</Heading>
          <Text color="grey" p='2' textAlign="left" fontSize='sm'>{description}</Text>
      <br />
      <Divider width= "480px"/>
      <Button bgColor="#FF3D96" width="90px" height="40px" _hover={{ border:"2px", borderColor: '#FF3D96', bg: "#1c2b51"}} >Github</Button>
    </VStack>
  );
};

export default Card;
