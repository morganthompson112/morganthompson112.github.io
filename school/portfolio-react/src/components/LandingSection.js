import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const bioStyle = {
  fontSize: "40px",
  fontWeight: "600"
};

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img 
      src={"https://i.pravatar.cc/150?img=7"} 
      style={{
        borderRadius: "100%"
      }}
    />
    <p>{greeting}</p>
    <br></br>

    <h2 style={bioStyle}>{bio1}</h2>
    <h2 style={bioStyle}>{bio2}</h2>
  </FullScreenSection>
);

export default LandingSection;
