// import React from "react";
import { Box, Text, Flex, HStack } from "@chakra-ui/react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { IThreadCard } from "../../../types/threadTypes";
// import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../../libs/Api";

export default function Threads(props : IThreadCard) {
  // LIKE
  const threadId = props.id;
  console.log(threadId);

  const mutation = useMutation({
    mutationFn: (like) => {
      return API.post(`/thread/${threadId}/like`, like);
    },
  });

  return (
    <Flex backgroundColor="gray.700" justifyContent="center">
      <Box maxWidth="600px" borderRadius="md" p={2} mb={4}>
        <Box
          position="relative"
          style={{ width: "100%", height: "200px" }} // Set a fixed width and height for the image
        >
          <img
            src={props.image}
            alt={props.users?.userName}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} // Maintain aspect ratio
          />
        </Box>
        <Box>
          <Text fontWeight="bold" color="white">
            {props.users?.fullName}
          </Text>
          <Text color="gray" fontSize="sm">
            {props.users?.userName}
          </Text>
        </Box>
        <Flex alignItems="center" mt={2}>
          {/* <HStack onClick={() => mutation.mutate()}>
									<Box fontSize={"18px"}>
										{props.isLikes ? <BsHeartFill color="red" /> : <BsHeart />}
									</Box>
									<Text>{props?.likes?.length}</Text>
								</HStack> */}
          {/* <Link to={`/DetailThread`}>
            <Text color="white">
              <Icon as={FaComment} color="white" marginRight={2} />
              Comments
            </Text>
          </Link> */}
        </Flex>
        <Box>
          <HStack fontSize="15px" marginY={"10px"}>
            <HStack onClick={() => mutation.mutate()}>
              console.log("tombol like di click");
              
              <Box fontSize={"18px"}>
                {props.isLikes ? <BsHeartFill color="red" /> : <BsHeart />}
              </Box>
              <Text>{props?.likes?.length}</Text>
            </HStack>
            {/* <Link to={`/detail/${props.id}`}>
									<HStack>
										<Box fontSize={"20px"}>
											<BiMessageAltDetail />
										</Box>
										<Text>{props?.replies?.length} Replies</Text>
									</HStack>
								</Link> */}
          </HStack>
        </Box>
        <Text color="white">{props.content}</Text>
      </Box>
    </Flex>
  );
}
