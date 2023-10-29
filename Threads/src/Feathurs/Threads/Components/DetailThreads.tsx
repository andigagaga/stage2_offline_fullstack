import {
  Box,
  Text,
  Flex,
  Input,
  IconButton,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { FaHeart, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DetailThreads() {
  return (
    <Flex
      backgroundColor={"gray.700"}
      display={"flex"}
      justifyContent={"center"}
      paddingY={16} // Mengurangi padding vertikal
    >
      <Box
        borderRadius="md"
        backgroundColor="white"
        boxShadow="md"
        padding={2} // Mengurangi padding card
        maxWidth="400px" // Mengurangi lebar maksimum card
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          marginTop={2}
          marginRight={2}
        >
          <Link to={`/`}>
            <Button
              backgroundColor="black"
              color="white"
              fontWeight="bold"
              _hover={{ bg: "gray.700" }} // Efek saat kursor diarahkan ke tombol
              _focus={{ outline: "none" }} // Menghilangkan border saat tombol mendapat fokus
            >
              Back
            </Button>
          </Link>
        </Box>
        ;
        <Flex alignItems="center" p={2}>
          <Avatar
            name="Guswandi"
            size="sm"
            src="https://path-to-avatar-image.jpg"
          />
          <Box ml={2}>
            <Text fontWeight="bold" color="gray.800">
              Guswandi
            </Text>
            <Text color="gray.500" fontSize="sm">
              andi@gmail.com
            </Text>
          </Box>
        </Flex>
        <img
          src="https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?w=360&t=st=1698054382~exp=1698054982~hmac=4f5dda55004e0af0fb6f27a532d0a2749014e4a566512e41471a16f7bc8647c9"
          alt="detail"
          style={{ width: "100%", borderRadius: "lg" }}
        />
        <Flex alignItems="center" p={2}>
          <IconButton
            icon={<FaHeart color="red" />}
            aria-label="Like"
            variant="ghost"
          />
          <Text fontWeight="bold" color="gray.600">
            30 likes
          </Text>
        </Flex>
        <Text color="gray.800">apa sih kamuu</Text>
        <Input
          placeholder="Comment..."
          color="gray.800"
          fontWeight="bold"
          border="none"
          borderTop="1px solid #ccc"
          borderBottomRadius="lg"
        />
        <Flex alignItems="center" p={2}>
          <IconButton
            icon={<FaPaperPlane />}
            aria-label="Send"
            variant="ghost"
            colorScheme="blue"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
