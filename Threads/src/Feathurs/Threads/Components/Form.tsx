import { Box, Input, Button, Text } from "@chakra-ui/react";
// import { ChangeEvent } from "react";
// import { formThreads } from "../../../types/formThread";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { API } from "../../../libs/Api";
import { useThreads } from "../Hooks/useThreads";

export default function Form() {
  const { form, handlePost, handleChange, handleButtonClick, fileInputRef } = useThreads();

  return (
    <form
      onSubmit={handlePost}
      encType="multipart/form-data">
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
            value={form.content}
            onChange={handleChange}
            marginY={4}
          ></Input>
          <Button variant={"gost"}
            color={"green"} onClick={handleButtonClick}>

          </Button>
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
            onChange={handleChange}
            marginY={4}
            type="file"
            ref={fileInputRef}
          ></Input>
        </Box>

        <Button colorScheme="green" type="submit" >
          Post
        </Button>
      </Box>
    </form >
  );
}
