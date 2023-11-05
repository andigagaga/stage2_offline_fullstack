import { Avatar, Button, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function FolloItem() {
  return (
    <HStack justifyContent={"space-between"}>
      <Link href="/Profile">
        <HStack spacing={3}>
          <Avatar size={"md"} name="Guswandi" />
          <Stack spacing={-4}>
            <Text fontSize={"md"} color={"white"}>
              name
            </Text>
            <Text fontSize={"md"} color={"white"}>
              @userName
            </Text>
          </Stack>
        </HStack>
      </Link>

      <Button _hover={{bg: "gray"}} variant={"outline"} rounded={"full"} size={"sm"} color={"gray"}>
        follow
      </Button>
    </HStack>
  );
}
