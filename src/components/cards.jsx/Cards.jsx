import React from 'react';
import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { FaRobot, FaLayerGroup, FaDownload, FaGlobe } from 'react-icons/fa';
import {  Grid } from '@chakra-ui/react';
const FeatureCard = ({ icon, title, description }) => (
  <VStack
    p={5}
    spacing={3}
    borderRadius="md"
    _hover={{ bg: 'purple.700', transform: 'scale(1.05)' }}
    transition="all 0.3s ease-in-out"
    align="center"  
    textAlign="center" 
  >
    <Icon as={icon} w={10} h={10} color="purple.300" />
    <Text fontWeight="bold" color="white">
      {title}
    </Text>
    <Text color="gray.400">{description}</Text>
  </VStack>
);

const HowItWorksStep = ({ icon, title, description }) => (
  <VStack
    p={5}
    borderRadius="md"
    bg="gray.800"
    _hover={{ bg: 'gray.700', transform: 'scale(1.05)' }}
    transition="all 0.3s ease-in-out"
    align="center"  
    textAlign="center"  
    spacing={3}
  >
    <Icon as={icon} w={10} h={10} color="blue.300" />
    <Text fontWeight="bold" mt={3} color="white">
      {title}
    </Text>
    <Text color="gray.400">{description}</Text>
  </VStack>
);

const Cards = () => {
  return (


    <Box   p={10}>
<Box bg="purple.900" p={10}>
  <Grid
    templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }} 
    gap={4}
  >
    <FeatureCard
      icon={FaRobot}
      title="AI-Powered Writing"
      description="Generate high-quality content with advanced AI technology."
    />
    <FeatureCard
      icon={FaLayerGroup}
      title="Custom Genres"
      description="Create stories in any genre or blend multiple styles."
    />
    <FeatureCard
      icon={FaDownload}
      title="Instant Download"
      description="Get your completed book in various formats instantly."
    />
    <FeatureCard
      icon={FaGlobe}
      title="Multilingual"
      description="Generate content in multiple languages effortlessly."
    />
  </Grid>
</Box>


      <Box   mt={10} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={5}>
          How It Works
        </Text>
        <Flex
          justify="center"  
          wrap="wrap"
          gap={10}  
        >
          <HowItWorksStep
            icon={FaLayerGroup}
            title="Choose Your Genre"
            description="Select from a wide range of genres or create a custom blend."
          />
          <HowItWorksStep
            icon={FaRobot}
            title="Provide Key Details"
            description="Input main characters, plot points, or themes to guide the AI."
          />
          <HowItWorksStep
            icon={FaRobot}
            title="AI Generation"
            description="Our advanced AI creates your book based on your inputs."
          />
          <HowItWorksStep
            icon={FaDownload}
            title="Review and Download"
            description="Review your generated book and download in your preferred format."
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Cards;
