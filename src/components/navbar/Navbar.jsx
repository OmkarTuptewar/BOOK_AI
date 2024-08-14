import React from "react";
import { Box, Flex, Text, Button, Link, HStack, Image, useColorMode, useColorModeValue, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Collapse } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Box px={7} py={9}>
      <Flex alignItems="center" justify="space-between">
        {/* Logo */}
        <HStack spacing={3}>
          <Image
           src="logo.png"
            alt="BookAI Logo"
            boxSize="45px"
          />
          <Text color={useColorModeValue("black", "white")} fontSize="30px" fontWeight="bold">
            BookAI
          </Text>
        </HStack>

        {/* Responsive Drawer Icon */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          display={{ base: "block", md: "none" }}
          onClick={handleDrawerToggle}
        />

        {/* Navigation Links */}
        <Collapse in={{ base: isDrawerOpen, md: true }}>
          <Flex
            alignItems="center"
            display={{ base: isDrawerOpen ? "flex" : "none", md: "flex" }}
            direction={{ base: "column", md: "row" }}
            width={{ base: "full", md: "auto" }}
            mt={{ base: 4, md: 0 }}
          >
            <HStack spacing={8} fontSize="md" color={useColorModeValue("black", "white")}>
              <Link as={RouterLink} to="/features">Features</Link>
              <Link as={RouterLink} to="/how-it-works">How It Works</Link>
              <Link as={RouterLink} to="/roadmap">Roadmap</Link>
              <Link as={RouterLink} to="/api">API</Link>
              <Link as={RouterLink} to="/price">Price</Link>
              <Link as={RouterLink} to="/models">Models</Link>
            </HStack>
          </Flex>
        </Collapse>

        <Flex alignItems="center">
          <Button variant='outline' onClick={toggleColorMode} colorScheme='teal' aria-label="Toggle color mode">
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
          
          <Button
            bgGradient="linear(to-r, blue.400, purple.400)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, blue.500, purple.500)" }}
            px={6}
            py={2}
            ml={4}
          >
            Login / Sign Up
          </Button>
        </Flex>
      </Flex>

      {/* Drawer for mobile view */}
      <Drawer isOpen={isDrawerOpen} placement="top" onClose={handleDrawerToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <HStack spacing={8} fontSize="md" color={useColorModeValue("black", "white")} direction="column">
              <Link as={RouterLink} to="/features">Features</Link>
              <Link as={RouterLink} to="/how-it-works">How It Works</Link>
              <Link as={RouterLink} to="/roadmap">Roadmap</Link>
              <Link as={RouterLink} to="/api">API</Link>
              <Link as={RouterLink} to="/price">Price</Link>
              <Link as={RouterLink} to="/models">Models</Link>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
