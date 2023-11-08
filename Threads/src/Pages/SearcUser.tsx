import { Box, Button, Input,Stack} from "@chakra-ui/react";
// import React, { useState } from 'react'
import Main from "../LayOut/Main";
// import { IUser } from '../types/userType'
// import useUsers from "../Feathurs/Threads/Hooks/useUsers";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Type/rootState";
import { IUser } from "../types/userType";
import { useState } from "react";
import FollowItem from "../Feathurs/Threads/Components/FolloItem";
import { useGetAllUsers } from "../Feathurs/Threads/Hooks/getAllUsers";

export default function SearcUser() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string>("");
  // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const { data, refetch } = useGetAllUsers(searchResult);

  const auth = useSelector((state: RootState) => state.auth);

  function handleSearch() {
    setSearchResult(searchQuery);
    setTimeout(() => {
        refetch();
    }, 300)
  }

  return (
    <Main>
      <Box color={"white"} display={"flex"} justifyContent={"center"} mt={12}>
        <Box width={"50%"} display={"flex"} gap={4}>
          <Input onChange={(e) => setSearchQuery(e.target.value)} htmlSize={4} width="100%" placeholder="Search" />
          <Button onClick={handleSearch}>Search</Button>
        </Box>
      </Box>
      <hr style={{ color: "white", marginTop: 32 }} />


      <Stack mt={12} justifyContent={"center"} px={32} spacing={4}>
        {data?.filter((e: IUser) => e.id !== auth.user?.id).map((e: IUser) => (
          <FollowItem
            id={e.id}
            profile_picture={e.profile_picture}
            fullName={e.fullName}
            userName={e.userName}
            key={e.id}
          />
        ))}
      </Stack>
    </Main>
  );
}
