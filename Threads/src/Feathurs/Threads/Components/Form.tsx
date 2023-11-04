import { Box, Input, Button, Text } from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { useThreads } from "../Hooks/useThreads";

export default function Form() {
  const { form, handlePost, handleChange, fileInputRef } = useThreads();

  return (
    <form onSubmit={handlePost} encType="multipart/form-data">
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
        </Box>

        <Box marginBottom={4}>
          <Text color={"white"} fontWeight={"bold"} marginBottom={2}>
            Your Photos
          </Text>
          <label
            htmlFor="image"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#007BFF",
              color: "white",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "5px",
            }}
          >
            <BiImageAdd size={"30px"} />
            <Input
              id="image"
              variant="flushed"
              type="file"
              placeholder="What's on your mind"
              maxW="25rem"
              name="image"
              onChange={handleChange}
              hidden
              ref={fileInputRef}
            />
          </label>
        </Box>

        <Button colorScheme="green" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}
