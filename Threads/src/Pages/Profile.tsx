import {
  Box,
  Text,
  Button,
  Card,
  Avatar,
  Flex,
  Stack,
  HStack,
} from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { RootState } from "../Store/Type/rootState";

function MyProfile() {
  // const user = useSelector((state: RootState) => state.auth);

  return (
    <Box>
      <Card bg={"whiteAlpha.200"} p={4}>
        <Text color={"white"}>My Profile</Text>
        <Box
          pos={"relative"}
          h={"70px"}
          mt={3}
          rounded={"xl"}
          bg={
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
          }
        >
          <Box
            pos={"absolute"}
            bottom={-6}
            left={4}
            p={1}
            bg={"blackAlpha.800"}
            rounded={"full"}
          >
            <Avatar size={"md"} />
          </Box>
        </Box>
        <Flex justify={"right"} mt={1}>
          <Button
            color={"white"}
            size={"xs"}
            rounded={"full"}
            variant={"outline"}
            mt={8}
            w={"fit-content"}
            _hover={{ bg: "gray.700" }}
          >
            Edit Profile
          </Button>
        </Flex>
        <Stack spacing={0}>
          <Text mt={3} fontSize={"lg"} fontWeight={"semibold"} color={"white"}>
            name😘😘
          </Text>
          <Text fontSize={"xs"} color={"white"} my={2}>
            @userName
          </Text>
          <Text fontSize={"sm"} color={"white"}>
            profilDesc
          </Text>
          <HStack fontSize={"sm"}>
            <HStack>
              <Text color={"whiteAlpha.800"}>200</Text>
              <Text color={"whiteAlpha.800"}>Following</Text>
            </HStack>
            <HStack>
              <Text color={"whiteAlpha.800"}>200</Text>
              <Text color={"whiteAlpha.800"}>Followers</Text>
            </HStack>
          </HStack>
        </Stack>
      </Card>
    </Box>
  );
}

export default MyProfile;
