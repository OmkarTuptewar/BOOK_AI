import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      textAlign="center"
      color="white"
      py={20}
      px={4}
     
    
      
    >
      <Heading
        as="h1"
        size="2xl"
        fontWeight="bold"
        mb={4}
      >
        Explore the Possibilities of{' '}
        <Text as="span" bgGradient="linear(to-r, purple.400, blue.500)" bgClip="text">
          AI Book Writing
        </Text>{' '}
        with <Text as="span" textDecoration="underline">BookAI</Text>
      </Heading>
      <Text fontSize="lg" mb={8} color="gray.300">
        Unleash the power of AI to create captivating books in minutes.
        <br />
        Download, Distribute wherever you want. Generate unlimited free books.
      </Text>
      <Button
        size="lg"
        colorScheme="blue"
        bgGradient="linear(to-r, blue.400, blue.500)"
        _hover={{ bgGradient: "linear(to-r, blue.500, purple.500)" }}
        mr={4}
      >
        Get Started
      </Button>
      <Button
        size="lg"
        colorScheme="purple"
        bgGradient="linear(to-r, purple.400, purple.500)"
        _hover={{ bgGradient: "linear(to-r, purple.500, blue.500)" }}
      >
        Get API Access
      </Button>
    </Box>
  );
};

export default HeroSection;
