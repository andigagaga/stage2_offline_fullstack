import { Box, GridItem, HStack, Spinner } from "@chakra-ui/react";
import Main from "../LayOut/Main";
import ThreadDetail from "../Feathurs/Threads/Components/DetailThreads";
import { useParams } from "react-router-dom";
import { useDetailThreads } from "../Feathurs/Threads/Hooks/useDetailThreads";

export default function Replies() {
  const params = useParams();
  const idParams = Number(params.id);

  const { data, isLoading } = useDetailThreads(idParams);
  const detailData = data?.data;
  console.log(detailData);
  
  
  

  return (
    <Main>
      <GridItem>
        <HStack display={"flex"} justifyContent={"center"}>
          {isLoading && <Spinner color="green.500" />}
          <Box>
            <ThreadDetail
              content={detailData?.content}
              image={detailData?.image}
              userName={detailData?.users.userName}
              fullName={detailData?.users.fullName}
              profile_picture={detailData?.users.profile_picture}
              likes={detailData?.likes}
              replies={detailData?.replies}
              created_at={detailData?.created_at}
            />
          </Box>
        </HStack>
      </GridItem>
    </Main>
  );
}
