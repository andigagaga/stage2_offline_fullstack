import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaHome, FaSearch, FaUser, FaHeart } from "react-icons/fa";

export default function MyNavbar() {
  return (
    <ChakraProvider>
  <Box borderLeft="1px solid #ccc">
    <Box
      position="fixed"
      display="flex"
      flexDirection="column"
      backgroundColor={"gray.800"}
      padding={8}
      borderRight="1px solid #ccc" // Menambahkan border ke elemen ini
      borderTop="1px solid #ccc"
      borderBottom="1px solid #ccc"
      height="100%" // Mengatur tinggi elemen menjadi 100% untuk mencapai ketinggian kontennya
    >
      <Text color="white" fontWeight="bold" fontSize="50" marginBottom={8}>
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
