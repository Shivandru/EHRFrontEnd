import React from "react";
import { Box, Text, VStack, StackDivider, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box p="1rem" bg="#CBD5E0" h={{ base: "auto", md: "100vh" }}>
        <Text
          textAlign={"center"}
          fontSize="1.35rem"
          fontWeight={"bold"}
          mb="2rem"
        >
          Welcome
        </Text>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={10}
          align="center"
        >
          <Box>
            <Link onClick={() => navigate("/")}>DASHBORD</Link>
          </Box>
          <Box>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => navigate("/register")}
            >
              REGISTER
            </Link>
          </Box>
          <Box>
            <Link onClick={() => navigate("/login")}>LOGIN</Link>
          </Box>
          <Box>
            <Link onClick={() => navigate("/blogs")}>RECORDS</Link>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SideNav;
