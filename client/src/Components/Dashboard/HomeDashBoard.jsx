import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
const HomeDashBoard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <Flex w="100%" justify={"space-evenly"} p="1rem" pt="2rem" mt="2rem">
        <Flex
          w="20%"
          h="10rem"
          bg="#48BB78"
          borderRadius="1rem"
          justify={"center"}
          align={"center"}
          cursor={"pointer"}
          fontSize={"1.5rem"}
        >
          Stable
        </Flex>
        <Flex
          w="20%"
          h="10rem"
          bg="#F6E05E"
          borderRadius="1rem"
          justify={"center"}
          cursor={"pointer"}
          align={"center"}
          fontSize={"1.5rem"}
        >
          Intermediate
        </Flex>
        <Flex
          w="20%"
          h="10rem"
          bg="#F56565"
          borderRadius="1rem"
          cursor={"pointer"}
          justify={"center"}
          align={"center"}
          fontSize={"1.5rem"}
        >
          Critical
        </Flex>
      </Flex>
      <Flex justify={"space-around"} p="1rem">
        <Box w="40%" h="30rem">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box w="40%" h="30rem">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </>
  );
};

export default HomeDashBoard;
