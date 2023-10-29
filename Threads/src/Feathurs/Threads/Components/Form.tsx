import { ChakraProvider, Box, Input, Button, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { formThreads } from "../../../types/formThread";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../../../libs/Api";

export default function Form() {
  const [formData, setFormData] = useState<formThreads>({
    content: "",
    image: "",
    user: "3",
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newThread: formThreads) => {
      console.log("Calling mutation with data: ", newThread);
      const { content, image, user } = newThread;
      return API.post("/thread", {
        content,
        image,
        user,
      });
    },
    onSuccess() {
      console.log("Mutation succeeded");
      QueryClient.invalidateQueries({ queryKey: ["thread"] });
      setFormData({
        content: "",
        image: "",
        user: "3",
      });
    },

    onError(error) {
      console.error("Mutation failed with error: ", error);
    },
  });
  console.log(formData);

  const { content, image, user } = formData;

  return (
    <ChakraProvider>
      <Box display="flex" marginBottom={8} flexDirection={"column"} padding={4}>
        <Box>
          <Text color={"white"} fontWeight={"bold"}>
            Your Caption
          </Text>
          <Input
            placeholder="Click Is Your Posting..."
            color="white"
            fontWeight={"bold"}
            flex="1"
            mr={2}
            border="1px solid #ccc"
            name="content"
            value={formData.content}
            onChange={(event) => handleChangeInput(event)}
            marginY={4}
          ></Input>
        </Box>

        <Box>
          <Text color={"white"} fontWeight={"bold"}>
            Your Photos
          </Text>
          <Input
            placeholder="Click Is Your Posting..."
            color="white"
            fontWeight={"bold"}
            flex="1"
            mr={2}
            border="1px solid #ccc"
            name="image"
            value={formData.image}
            onChange={(event) => handleChangeInput(event)}
            marginY={4}
          ></Input>
        </Box>

        <Button
          colorScheme="white"
          width={12}
          height={8}
          onClick={() => mutation.mutate({ content, user, image })}
        >
          <Text
            fontWeight={"bold"}
            backgroundColor={"green"}
            padding={2}
            borderRadius={4}
          >
            Post
          </Text>
        </Button>
      </Box>
    </ChakraProvider>
  );
}
