import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../Redux/Actions";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({ username: "", email: "", pass: "" });
  const toast = useToast();
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  async function handleSubmit(e) {
    // const dispatch = useDispatch();
    try {
      e.preventDefault();
      const res = await fetch(
        `https://backendehr-production.up.railway.app/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
          credentials: "include",
          mode: "cors",
        }
      );
      const data = await res.json();
      if (data.msg === "Login Successful") {
        // dispatch(handleLogin());
        toast({
          title: "Logged In",
          description: "You Logged in Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Invalid Credential",
          description: "Please enter valid credentials",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Box h="100vh" w="100%">
      <Flex
        h="100vh"
        align={"center"}
        justify={"center"}
        position={"absolute"}
        right="4rem"
        bottom="3rem"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}></Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={login.username}
                    />
                  </FormControl>
                </Box>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={login.email}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="pass"
                      onChange={handleChange}
                      value={login.pass}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
};

export default Login;
