/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Button, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Type/rootState";


interface IProps {
  fullName?: string;
  userName?:string;
  profile_picture?:string;
  id: number;
}
export default function FollowItem({
  fullName,
  userName,
  profile_picture,
  id
}: IProps) {

  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  // const checkStatus = auth.



  return (
    <HStack justifyContent={"space-between"}>
      <Link href="/Profile">
        <HStack spacing={3}>
          <Avatar size={"md"} src={profile_picture} />
          <Stack spacing={-4}>
            <Text fontSize={"md"} color={"white"} fontWeight={"semibold"}>
              {fullName}
            </Text>
            <Text fontSize={"md"} color={"gray"}>
              @{userName}
            </Text>
          </Stack>
        </HStack>
      </Link>

      {/* <Button onClick={() => follow(id)} _hover={{bg: "gray"}} variant={"outline"} rounded={"full"} size={"sm"} color={checkStatusFollow === "unfollow" ? "gray" : "white"}>
        follow
      </Button> */}
    </HStack>
  );
}
