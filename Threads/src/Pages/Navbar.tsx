import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaHome, FaSearch, FaUser, FaHeart } from "react-icons/fa";

export default function MyNavbar() {
  return (
    <ChakraProvider>
  <Box  bg='red'>
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor={"gray.800"}
    
    >
      <Text color="white" fontWeight="bold" fontSize="50" >
        CIRCLE
      </Text>
      <Text display="flex" alignItems="center" gap="10px">
        <Icon color="white" as={FaHome} marginBottom={2} />
        <Text color="white">HOME</Text>
      </Text>
      <Text display="flex" alignItems="center" gap="10px" marginTop={4}>
        <Icon color="white" as={FaSearch} marginBottom={2} />
        <Text color="white">SEARCH</Text>
      </Text>
      <Text display="flex" alignItems="center" gap="10px" marginTop={4}>
        <Icon color="white" as={FaHeart} marginBottom={2} />
        <Text color="white">Follows</Text>
      </Text>
      <Text display="flex" alignItems="center" gap="10px" marginTop={4}>
        <Icon color="white" as={FaUser} marginBottom={2} />
        <Text color="white">Profile</Text>
      </Text>
      <Button backgroundColor="green" width={36} height={8} marginTop={8}>
        Create Post
      </Button>
    </Box>
  </Box>
</ChakraProvider>

  );
}
