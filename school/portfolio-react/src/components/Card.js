import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div style={{
      borderRadius: "10px",
      backgroundColor: "white"
    }}>
      <img src={imageSrc} style={{borderRadius: "10px"}}/>

      <Heading size="lg" color="black" padding="10px">{title}</Heading>
      <Text color= "gray" padding="10px">{description}</Text>
      
      <HStack>
        <Text color="black" padding="10px 0 10px 10px">
          See more
        </Text>
        
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x"/>
      </HStack>
      
    </div>
  );
};

export default Card;
