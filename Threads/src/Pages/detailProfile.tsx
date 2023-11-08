import { Box, Button, Image, Text } from "@chakra-ui/react";
// import React from 'react'
// import MainProfil from '../LayOut/MainProfile'
// import MyNavbar from './Navbar'
import MainProfil from "../LayOut/MainProfile";
// import Main from '../LayOut/Main'

export default function DetailProfile() {
  return (
    <MainProfil>
      <Box color={"white"} display={"flex"} justifyContent={"center"} mt={12}>
        <Box
          borderRadius="full" // Membuat sudut bulat sehingga terlihat seperti gambar profil
          overflow="hidden" // Menghilangkan bagian gambar yang tidak muat dalam kotak
          boxShadow="lg" // Tambahkan bayangan untuk efek tiga dimensi
          p={1.5} // Mengatur jarak antara gambar dan kotak
          bg={
            "linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)"
          }
        >
          <Image
            src="https://img.freepik.com/free-photo/young-adult-enjoying-yoga-nature_23-2149573175.jpg?w=740&t=st=1699428843~exp=1699429443~hmac=177d38cc3db44cc4eeb8bd3829e07578088986c5c6d3b4b03cdda9fd2d286bcb"
            alt="Profile Picture"
            width="200px" // Agar gambar mengisi seluruh wadah
            height="200px" // Agar gambar mengisi seluruh wadah
            objectFit="cover" // Mengatur agar gambar sesuai dengan wadah
            rounded={"full"}
          />
        </Box>
        <Box>
          <Box marginLeft={32} display={"flex"} gap={2}>
            <Text>userName</Text>
            <Button mx={8}>Edit Profile</Button>
            <Button>View Archive</Button>
          </Box>
          <Box marginLeft={32} display={"flex"} gap={2} mt={16}>
            <Text>250 followers</Text>
            <Text marginLeft={4}>421 following</Text>
          </Box>
          <Box marginLeft={32} display={"flex"} gap={2} mt={16}>
            <Text>fullName</Text>
          </Box>
        </Box>
      </Box>
      <hr style={{ color: "white", marginTop: 32 }} />
      <Box display={"flex"} justifyContent={"center"} mt={36}>
        <Box h={"200px"}  p={1} // Mengatur jarak antara gambar dan kotak
          bg={
            "linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)"
          }>
          <Image
            src="https://img.freepik.com/free-photo/young-adult-enjoying-yoga-nature_23-2149573175.jpg?w=740&t=st=1699428843~exp=1699429443~hmac=177d38cc3db44cc4eeb8bd3829e07578088986c5c6d3b4b03cdda9fd2d286bcb"
            alt="Profile Picture"
            w={"80%"}
            h={"100%"}
          />
        </Box>
        <Box h={"200px"}  p={1.5} // Mengatur jarak antara gambar dan kotak
          bg={
            "linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)"
          }>
          <Image
            src="https://img.freepik.com/free-photo/young-adult-enjoying-yoga-nature_23-2149573175.jpg?w=740&t=st=1699428843~exp=1699429443~hmac=177d38cc3db44cc4eeb8bd3829e07578088986c5c6d3b4b03cdda9fd2d286bcb"
            alt="Profile Picture"
            w={"80%"}
            h={"100%"}
          />
        </Box>
      </Box>
    </MainProfil>
  );
}
