import React from "react";
import Threads from "../Feathurs/Threads/Components/Threads";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import MyNavbar from "./Navbar";
import Profile from "./Profile";
import Form from "../Feathurs/Threads/Components/Form";
import { API } from "../libs/Api";
import { IThreadPost as TypeDataThread } from "../types/threadTypes";

export default function Home() {
  const { data: threadData } = useQuery({
    queryKey: ["thread"],
    queryFn: async () => {
      const { data } = await API.get("/threads");
      return data;
    }
  })
  console.log(threadData);
  
  return (
    <React.Fragment>
      <ChakraProvider>
        
        <MyNavbar />

        <Box
          maxWidth="1500px"
          display="flex"
          backgroundColor={"gray.800"}
          justifyContent={"center"}
          border="1px solid #ccc"
          borderRadius="md"
        >
          <Box
            maxWidth="500px"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            marginLeft={60}
            marginTop={14}
          >
            <Text
              marginBottom={10}
              fontWeight="bold"
              display="flex"
              justifyContent="center"
              fontSize={50}
              color="white"
            >
              HOME
            </Text>
            <Form />
            {/* Display comments */}

            {threadData?.map((data: TypeDataThread) => (
              <Box border="1px solid #ccc" key={data.id}  borderRadius="md" p={2} mb={2}>
                <Threads
                  // key={data.id}
                  id={data.id}
                  content={data.content}
                  image={data.image}
                  user={data.user}
                />
              </Box>
            ))}
          </Box>
          <Profile />
        </Box>
      </ChakraProvider>
    </React.Fragment>
  );
}
