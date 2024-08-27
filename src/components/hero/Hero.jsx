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
        Welcome to{' '}
        <Text as="span" bgGradient="linear(to-r, purple.400, blue.500)" bgClip="text">
          Poetry Haven, Inc.
        </Text>
      </Heading>
      <Text fontSize="lg" mb={8} color="gray.300">
        We are a digital media content company dedicated to becoming an international hub for poet enthusiasts around the world.
        <br />
        Join us in celebrating the art of poetry and connecting with poets globally.
      </Text>
      <Button
        size="lg"
        colorScheme="blue"
        bgGradient="linear(to-r, blue.400, blue.500)"
        _hover={{ bgGradient: "linear(to-r, blue.500, purple.500)" }}
        mr={4}
      >
        Log In
      </Button>
      <Button
        size="lg"
        colorScheme="purple"
        bgGradient="linear(to-r, purple.400, purple.500)"
        _hover={{ bgGradient: "linear(to-r, purple.500, blue.500)" }}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default HeroSection;
