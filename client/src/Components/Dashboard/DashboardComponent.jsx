import React from "react";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import SideNav from "./SideNav";
import HomeDashBoard from "./HomeDashBoard";
const Dashboard = () => {
  const navWidth = useBreakpointValue({ base: "100%", sm: "150px" });
  const mainWidth = useBreakpointValue({
    base: "100%",
    sm: "calc(100% - 150px)",
  });
  return (
    <>
      <Grid
        templateAreas={{
          base: `
            "header"
            "nav"
            "main"
            "footer"
          `,
          md: `
            "header header"
            "nav main"
            "footer footer"
          `,
          lg: `
            "header header header header header"
            "nav main main main main"
            "footer footer footer footer footer"
          `,
        }}
        gridTemplateRows={{
          base: "auto",
          md: "50px 1fr 1fr 30px",
          lg: "50px 1fr 30px",
        }}
        gridTemplateColumns={{
          base: "1fr",
          md: "150px 1fr",
          lg: "150px repeat(4, 1fr)",
        }}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          pl="2"
          area={"header"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          bg="#CBD5E0"
        >
          Welcome to EHR Dashboard
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <SideNav />
        </GridItem>
        <GridItem pl="2" bg="#C6F6D5" area={"main"}>
          <HomeDashBoard />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
