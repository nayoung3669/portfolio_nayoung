import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, } from '@chakra-ui/react'

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: skdud3660@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/nayoung3669",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/nayoung-mia-kim/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#1c2b51"
    >
      <Box color="white" maxWidth="1280px" height="90px" margin="0 auto" borderBottom="2px" borderBottomColor="#FF3D96" >
        <HStack
          px={16}
          py={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav >
            <a href={socials[0].url}><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <a href={socials[1].url}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href={socials[2].url}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </nav>
          <nav>
            <HStack  >
              <Breadcrumb >
                  <BreadcrumbItem>
                    <a onClick={handleClick("introduction")} >Introduction</a>
                  </BreadcrumbItem> 
                  <BreadcrumbItem>
                    <a onClick={handleClick("projects")}>Projects</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a onClick={handleClick("contactme")}>Contact Me</a>
                  </BreadcrumbItem>
              </Breadcrumb>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
