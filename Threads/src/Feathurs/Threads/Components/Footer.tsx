import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <div>
            <Box position="relative" boxSizing="border-box" p="10px" width={72} height={36}>
                <Text color="white"  fontWeight={"bold"} display={"flex"} textAlign="justify">
                    About ▫ Help ▫ Press ▫ Api ▫ Jobs ▫ Locations ▫ Language{" "}
                </Text>
                <Text color="grey" fontSize="13px">
                    @2023 Privacy Terms Cookies Policy
                </Text>
            </Box>
        </div>
    )
}