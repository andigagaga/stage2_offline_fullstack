import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../LayOut/Main";
import Form from "../Feathurs/Threads/Components/Form";
import Threads from "../Feathurs/Threads/Components/Threads";
import { useThreads } from "../Feathurs/Threads/Hooks/useThreads";
import { IThreadCard } from "../types/threadTypes";

export default function Home() {
  const { getThreads } = useThreads();

  return (
    <React.Fragment>
      <ChakraProvider>
        <Main>
          <Form />
          {getThreads?.map((data: IThreadCard) => (
            <Threads
              content={data.content}
              fullName={data.users.fullName}
              image={data.image}
              likes={data.likes}
              posted_at={data.posted_at}
              idThread={data.id}
              idUser={data.users.id}
              profile_picture={data.users.profile_picture}
              key={data.id}
              replies={data.replies}
              userName={data.users.userName}
            />
          ))}
        </Main>
      </ChakraProvider>
    </React.Fragment>
  );
}
