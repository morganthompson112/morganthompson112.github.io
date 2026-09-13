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
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";



const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    //display alert
    if(response) {
      onOpen(response.type, response.message);
      if(response.type === 'success')
        formik.resetForm();
    }

    
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    onSubmit: (values) => {
      //submit function for the useSubmit hook
      submit("test", formik.values);
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .max(500, "Too long!")
        .required("Required")
    }),
  });

  const optionStyle = {
    backgroundColor: "gray"
  }

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <div id="contactme-section" style={{height:"0px", margin: "0", padding: "0"}}></div>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={(formik.errors.firstName && formik.touched.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={(formik.errors.email && formik.touched.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}>
                  <option value="hireMe" style={optionStyle}>Freelance project proposal</option>
                  <option value="openSource" style={optionStyle}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={optionStyle}>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={(formik.errors.comment && formik.touched.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {
                  isLoading ?
                    (
                      <Spinner/>
                    )
                    : "Submit"
                }
              </Button>
              
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
