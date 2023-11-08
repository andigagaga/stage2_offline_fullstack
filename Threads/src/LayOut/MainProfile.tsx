import {  Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyNavbar from "../Pages/Navbar";

export default function Main({ children }: { children?: ReactNode }) {
  return (
    <Grid gridTemplateColumns={"350px 1.5fr 400px"} bg={"gray.800"} h={"100vh"}>
      <GridItem px={6} py={4} borderRight={"1px solid #ccc"}>
        <MyNavbar />
      </GridItem>
      <GridItem>
        {children}
      </GridItem>

      <GridItem >
       
      </GridItem>
    </Grid>
  );
}
