import {
  Avatar,
  Box,
  Button,
  GridItem,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FaSmile } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Type/rootState";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useThreadReplies } from "../Hooks/useThreadReplies";
import { ThreadLikeType } from "../../../types/like";
import { IReplies } from "../../../types/IReplies";

interface IProps {
  content: string;
  image: string;
  created_at: string;
  userName: string;
  fullName: string;
  profile_picture: string;
  likes: [];
  replies: [];
}
export default function ThreadDetail({
  content,
  image,
  created_at,
  userName,
  fullName,
  profile_picture,
  likes,
  replies,
}: IProps) {
  const auth = useSelector((state: RootState) => state.auth);
  const params = useParams();

  const idThread = Number(params.id);

  const [inputContent, setInputContent] = useState<string>("");
  
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const queryClient = useQueryClient();
  const { mutate: repliesThread } = useThreadReplies({
    idThread: idThread,
    onSucces: () => {
      setInputContent("");
      queryClient.invalidateQueries({ queryKey: ["threadsReplies"] });
    },
  });
  function handleReplies() {
    repliesThread({
      content: inputContent,
    });
  }

  return (
    <GridItem>
      <HStack display={"flex"} justifyContent={"center"}>
        <Box>
          <Box w={"650px"}>
            <Box my={8}>
            {image && (
              <Image
                src={image}
                mx={"auto"}
                my={"auto"}
                w={"100%"}
                h={"100%"}
              />
            )}

            <Box
              mt={2}
              borderRadius="md"
              boxShadow="md"
              p={4}
              textAlign="left"
            >
              <Avatar size="md" src={profile_picture} />
              <Text fontSize="lg" color={"white"}>{fullName}</Text>
              <Text fontSize="md" color={"white"}>@{userName}</Text>
              <Text fontSize="sm" color={"white"}>{created_at}</Text>
            </Box>
            

              <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              <Text fontSize="md" color={"white"} my={8}>{content}</Text>
              <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              <HStack spacing={6} mt={2}>
                <HStack cursor="pointer" color="whiteAlpha.600">
                  <AiFillHeart
                    size={24}
                    color={
                      likes
                        ?.map((like: ThreadLikeType) => like.users.id)
                        .includes(auth.user.id)
                        ? "red"
                        : "white"
                    }
                  />
                  <Text fontSize="sm" color="whiteAlpha.600">
                    {likes?.length}
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <BiCommentDetail size={24} color="white" />
                  <Text fontSize="sm" color="whiteAlpha.600">
                    replies
                  </Text>
                </HStack>
              </HStack>
              <Text mt={12} display="flex">
                <FaSmile size={24} />
                <Input
                  placeholder="Write Your Reply"
                  color={"white"}
                  border="none"
                  value={inputContent}
                  onChange={(e) => setInputContent(e.target.value)}
                />
                <Button color="white" bg="none" onClick={handleReplies}>
                  Post
                </Button>
              </Text>
            </Box>
            <Stack>
              {replies &&
                replies?.map((e: IReplies) => (
                  <Box mt={8} display={"flex"} flexDirection={"row"}>
                    <Avatar
                      size={"md"}
                      src={e.users?.profile_picture}
                      name={e.users?.fullName}
                    />
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      ml={2}
                      bg={"whiteAlpha.200"}
                      p={4}
                    >
                      <Text color={"white"}>{e.users?.fullName}</Text>
                      <Text color={"white"} ml={2}>{e.users?.userName}</Text>
                      <Text color={"white"}>
                        {e.content}
                      </Text>
                    </Box>
                  </Box>
                ))}
            </Stack>
          </Box>
        </Box>
      </HStack>
    </GridItem>
  );
}
