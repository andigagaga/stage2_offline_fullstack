import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyNavbar from "../Pages/Navbar";
import MyProfile from "../Pages/Profile";
import SugestedForYou from "../Feathurs/Threads/Components/SugestedForYou";
import Footer from "../Feathurs/Threads/Components/Footer";

export default function Main({ children }: { children?: ReactNode }) {
  return (
    <Grid gridTemplateColumns={"350px 1.5fr 400px"} bg={"gray.800"} h={"100vh"}>
      <GridItem px={6} py={4} borderRight={"1px solid #ccc"}>
        <MyNavbar />
      </GridItem>
      <GridItem overflowY={"auto"} px={6} py={4} borderRight={"1px solid #ccc"}>
        {children}
      </GridItem>

      <GridItem px={6} py={4} borderRight={"1px solid #ccc"}>
        <MyProfile />
        <Box mt={4}>
          <SugestedForYou />
          <Footer />
        </Box>
      </GridItem>
    </Grid>
  );
}
