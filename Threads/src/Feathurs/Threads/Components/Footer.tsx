import { Card, Flex, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsDot, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <Card mt={4} bg={"whiteAlpha.200"} p={3}>
      <Flex>
        <Text display={"flex"} fontSize={"sm"} gap={1} color={"whiteAlpha.800"}>
          Developer <Text color={"red"}>Guswandi</Text>
        </Text>
        <Flex gap={"3px"} color={"gray"}>
          <BsDot size={24} />
          <AiFillGithub size={20} />
          <AiFillLinkedin size={20} />
          <BsFacebook size={20} />
          <AiFillInstagram size={20} />
        </Flex>
      </Flex>
      <Text color={"white"}>DumbWays Indonesia #1Coding Bootcamp</Text>
    </Card>
  );
}
