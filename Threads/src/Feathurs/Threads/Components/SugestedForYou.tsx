import { Box, Card, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import FolloItem from './FolloItem'
import useUsers from '../Hooks/useUsers'
import { IUser } from '../../../types/userType'

export default function SugestedForYou() {
    const {sugestedUsers} = useUsers()

  return (
   <Card bg={"whiteAlpha.200"} p={4}>
    <Text color={"white"}>
        Sugested For You
    </Text>
    <Box mt={3}>
        <Stack>
            {sugestedUsers?.map((data: IUser) => (
                 <FolloItem
                 id={data.id}
                 fullName={data.fullName}
                 key={data.id}
                profile_picture={data.profile_picture}
                userName={data.userName}
                 />
            ))}
           
        </Stack>

    </Box>

   </Card>
  )
}
