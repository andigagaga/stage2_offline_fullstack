import { Box, Card, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import FolloItem from './FolloItem'

export default function SugestedForYou() {
  return (
   <Card bg={"whiteAlpha.200"} p={4}>
    <Text color={"white"}>
        Sugested For You
    </Text>
    <Box mt={3}>
        <Stack>
            <FolloItem/>
        </Stack>

    </Box>

   </Card>
  )
}
