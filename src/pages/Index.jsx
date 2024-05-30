import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} mb={8}>
        <Heading as="h1" textAlign="center">
          My Mock Website ❤️
        </Heading>
      </Box>

      {/* Main Content */}
      <Box as="main" mb={8}>
        <VStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE3MDc0MTk3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" />
          <Heading as="h2" size="lg">
            Welcome to My Website
          </Heading>
          <Text fontSize="lg" textAlign="center">
            This is a mock website created to demonstrate a simple layout using Chakra UI and React Icons. Feel free to explore and see how everything is structured.
          </Text>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4}>
        <VStack spacing={4}>
          <Text>&copy; {new Date().getFullYear()} My Mock Website. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
