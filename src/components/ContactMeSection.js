import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import Alert from "./Alert.js";


const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen, ...state } = useAlertContext();

  const {values, errors, handleBlur, handleChange, handleSubmit, touched, getFieldProps} = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type:"",
      comment:"",
    },
    onSubmit: (values, actions) => {
      submit(values);
      onOpen(response.type, response.message);
      <Alert />
      console.log(state);
      // actions.resetForm();
      }
    ,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Firstname is required."),
      email: Yup.string().email().required("Email is required."),
      type: Yup.string().required("Please selece the type."),
      comment: Yup.string().required("Comment is required."),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#1c2b51"
      py={3}
      spacing={8}
    >
      <VStack w="1024px" p={32} pt={10} alignItems="flex-start" id="contactme-section">
        <Heading as="h1" size="xl"  >
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={touched.firstName && errors.firstName }>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...getFieldProps("firstName")}
                  placeholder="Enter your name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  borderColor="#FF3D96"
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...getFieldProps("email")}
                  placeholder="Enter your email"
                  borderColor="#FF3D96"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.type && errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                  {...getFieldProps('type')}
                  placeholder="Select the type"
                  borderColor="#FF3D96"
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...getFieldProps('comment')}
                  placeholder = "Leave your message"
                  borderColor="#FF3D96"
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" bgColor="#FF3D96" width="full" _hover={{ border:"2px", borderColor: '#FF3D96', bg: "#1c2b51"}}
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>

      </VStack>

    </FullScreenSection>
  );
};

export default LandingSection;


//isloading