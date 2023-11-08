/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Button, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Type/rootState";
import { API } from "../../../libs/Api";
import { useFollow } from "../Hooks/FollowHooks";
import { AUTH_CHECK } from "../../../Store/rootReducer";
import { IFollow } from "../../../types/userType";

interface IProps {
  fullName?: string;
  userName?: string;
  profile_picture?: string;
  id: number;
}
export default function FollowItem({
  fullName,
  userName,
  profile_picture,
  id,
}: IProps) {
  const dispatch = useDispatch();

  const auth = useSelector((state: RootState) => state.auth);

  console.log(auth);
  
  const checkStatus = auth.followings.map((e: IFollow) => e.id).includes(id) ? "unfollow" : "follow";

  const { mutate: Follow } = useFollow({
    onSucces: async () => {
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
    },
  });

  return (
    <HStack justifyContent={"space-between"}>
      <Link href={`/profile/${id}`}>
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

      <Button
        onClick={() => Follow(id)}
        _hover={{ bg: "gray" }}
        variant={"outline"}
        rounded={"full"}
        size={"sm"}
        color={checkStatus === "unfollow" ? "gray" : "white"}
      >
      {checkStatus}
      </Button>
    </HStack>
  );
}
