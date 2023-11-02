// import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";
import { IThreadPost } from "../../../types/threadTypes";
import { Link } from "react-router-dom";

export default function Threads(props: IThreadPost) {
  return (
    <Flex
      backgroundColor="gray.700"
      justifyContent="center"
      padding={4}
    >
      <Box
        maxWidth="600px"
        borderRadius="md"
        p={2}
        mb={4}
      >
        <Box position="relative">
          <img
            src={props.image}
            alt={props.users?.userName}
            style={{ width: "100%" }}
          />
          <Box>
            <Text fontWeight="bold" color="white">
              {props.users?.fullName}
            </Text>
            <Text color="gray" fontSize="sm">
              {props.users?.userName}
            </Text>
          </Box>
        </Box>
        <Flex alignItems="center" mt={2}>
          <Text color="white" marginRight={4}>
            <Icon as={FaHeart} color="white" marginRight={2} />
            {/* {props.likesCount} Likes */}
            Likes
          </Text>
          <Link to={`/DetailThread`}>
            <Text color="white">
              <Icon as={FaComment} color="white" marginRight={2} />
              Comments
            </Text>
          </Link>
        </Flex>
        <Text color="white">{props.content}</Text>
      </Box>
    </Flex>
  );
}
