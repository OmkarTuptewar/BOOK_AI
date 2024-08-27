import React from "react";
import { Box, Flex, Text, Button, HStack, Image, useColorMode, useColorModeValue, InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={7} py={9}>
      <Flex alignItems="center" justify="space-between">
        {/* Logo */}
        <HStack spacing={5} align="center">
  <Image
    src="logo.png"
    alt="Poetry Haven Logo"
    boxSize="50px"
    borderRadius="full"
    boxShadow="xl"
    border="2px solid"
    borderColor={useColorModeValue("purple.500", "purple.300")}
  />
  <Text
    color={useColorModeValue("purple.300", "purple.200")}
    fontSize="36px"
    fontWeight="bold"
    letterSpacing="tight"
    fontFamily="Georgia, serif"
  >
    Poetry Haven
  </Text>
</HStack>



        {/* Search Poet Feature */}
        <InputGroup maxW="400px" flex="1" mx={4}>
          <Input
            placeholder="Search Poet..."
            borderRadius="md"
            bg={useColorModeValue("white", "gray.700")}
            color={useColorModeValue("black", "white")}
            _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
          />
          <InputRightElement>
            <Button
              size="sm"
              bgGradient="linear(to-r, blue.400, purple.400)"
              color="white"
              _hover={{ bgGradient: "linear(to-r, blue.500, purple.500)" }}
              borderRadius="md"
            >
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>

        {/* Color Mode and Login/Sign Up */}
        <Flex alignItems="center">
          <Button variant='outline' onClick={toggleColorMode} colorScheme='teal' aria-label="Toggle color mode">
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
          
          <Button
  bgGradient="linear(to-r, blue.400, purple.400)"
  color="white"
  letterSpacing="tight"
  fontWeight="bold"
  fontSize="md"
  borderRadius="full"
  boxShadow="md"
  _hover={{
    bgGradient: "linear(to-r, blue.500, purple.500)",
    boxShadow: "lg",
    transform: "scale(1.05)",
  }}
  _active={{
    bgGradient: "linear(to-r, blue.600, purple.600)",
    transform: "scale(0.98)",
  }}
  px={8}
  py={3}
  ml={4}
>
  Subscribe
</Button>

        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
