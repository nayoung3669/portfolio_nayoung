import React from "react";
import { Button, Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@chakra-ui/react'


const Card = ({ title, description, imageSrc, github }) => {
  return (
    <VStack bg="white" borderRadius="10%" p='15' m='5px' border="2" borderColor="black" maxWidth={480}>
      <Image src={imageSrc} borderRadius="10%" height="260px" flex="0 0 auto" />
      <Heading as="h3" size="lg" color="#212121" >{title}</Heading>
      <Text color="grey" p='4' textAlign="center" fontSize='sm' height="60px">{description}</Text>
      <br />
      <Link href={github} isExternal>
        <Button 
          bgColor="#FF3D96" width="90px" height="40px" 
          _hover={{ border:"2px", borderColor: '#FF3D96', bg: "#1c2b51"}} 
          >Github <FontAwesomeIcon icon={faArrowRight} transform={{left: "30px"}}/>
        </Button>
      </Link>
    </VStack>
  );
};

export default Card;
