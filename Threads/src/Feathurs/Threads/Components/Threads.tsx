// import React from "react";
import { Box, Text, Flex, HStack, Avatar, Image } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

interface Props {
  idThread?: number;
  content?: string;
  image?:string;
  posted_at?: string;
  idUser?: number;
  userName?: string;
  fullName?: string;
  profile_picture?: string;
  likes?: [];
  replies?: [];
}


export default function Threads({ content, image, posted_at, userName, fullName, profile_picture, likes, replies}: Props) {
  return (
    <Flex gap={3} borderBottom="1px solid gray" mt={1}>
      <HStack align="start" mt={3} spacing={4}>
        <Avatar
          bg="white"
          fontWeight="semibold"
          size="md"
          name={fullName}
          src={profile_picture}
        />

        <Box mb={4}>
          <HStack>
            <Text
              display="flex"
              gap={1}
              fontSize="sm"
              fontWeight="semibold"
              color="gray.400"
            >
              {fullName}
              <Text fontWeight="light" display="flex" color="gray.300">
                {`${userName}`} <BsDot color="gray.300" size={24} />
                {posted_at}
              </Text>
            </Text>
          </HStack>

          <Text wordBreak="break-all" fontSize="sm" color="whiteAlpha.800">
            {content}
          </Text>
          {image && (
            <Image
            height={"300px"}
            src={image}
          />
          )}
          
          <HStack spacing={6}>
            <HStack cursor={"pointer"} color={"whiteAlpha.600"} mt={2}>
              <AiFillHeart size={24} color={"red"} />
              <Text fontSize="sm" color="whiteAlpha.600">
                {likes?.length}
              </Text>
            </HStack>
            <HStack>
              <BiCommentDetail size={24}  color={"white"}/>
              <Text fontSize="sm" color="whiteAlpha.600">
                {replies?.length}replies
              </Text>
            </HStack>
          </HStack>
        </Box>
      </HStack>
    </Flex>
  );
}
