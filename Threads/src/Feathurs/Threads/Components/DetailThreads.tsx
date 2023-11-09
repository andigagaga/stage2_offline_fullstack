import {
  Avatar,
  Box,
  Button,
  GridItem,
  HStack,
  Image,
  Input,
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
            {image && (
              <Image
                src={image}
                mx={"auto"}
                my={"auto"}
                w={"100%"}
                h={"100%"}
              />
            )}

            <Box color={"white"} mt={2}>
              <Avatar size={"md"} src={profile_picture}></Avatar>
              <Text>{fullName}</Text>
              <Text>{userName}</Text>
              <Text>{created_at}</Text>
              <hr
                style={{
                  color: "white",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></hr>
              <Text>{content}</Text>
              <hr
                style={{
                  color: "white",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></hr>
              <Text>
                <HStack spacing={6}>
                  <HStack cursor={"pointer"} color={"whiteAlpha.600"} mt={2}>
                    <AiFillHeart size={24} color={
                      likes?.map((like: ThreadLikeType) => like.users.id).includes(auth.user.id) ? "red" : "white"
                    } />
                    <Text fontSize="sm" color="whiteAlpha.600">
                      {likes?.length}
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <BiCommentDetail size={24} color={"white"} />
                    <Text fontSize="sm" color="whiteAlpha.600">
                      replies
                    </Text>
                  </HStack>
                </HStack>
              </Text>
              <hr
                style={{
                  color: "white",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></hr>
              <Text mt={12} display={"flex"}>
                <FaSmile size={24} />
                <Input placeholder="Write Your Reply" border={"none"} value={inputContent} onChange={(e) => setInputContent(e.target.value)}></Input>
                <Button color={"white"} bg={"none"} onClick={handleReplies}>
                  Post
                </Button>
              </Text>
            </Box>
            <HStack>
              {replies && replies?.map((e: IReplies) => (
                <Box>
                  <Avatar size={"md"} src={e.users?.profile_picture} name={e.users?.fullName}/>
                  <Box>
                    <Text>{e.users?.fullName}</Text>
                    <Text>{e.users?.userName}</Text>
                  </Box>
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>
      </HStack>
    </GridItem>
  );
}
