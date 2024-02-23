import React, { useState, useEffect } from "react";
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
  const [patientData, setPatientData] = useState([]);
  const [aggData, setAggData] = useState([]);
  const [conditionData, setConditionData] = useState([]);
  async function getData() {
    try {
      const res = await fetch(`http://localhost:3000/record`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });
      const data = await res.json();
      setPatientData(data.data);
      setAggData(data.aggregatedData);
      setConditionData(data.aggregatedConditionData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  // console.log(patientData);
  console.log(conditionData);
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
          fontSize={["0.9rem", "1.5rem"]}
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
              data={aggData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
              <Bar dataKey="gender" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box w="40%" h="30rem">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={conditionData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="patient-condition"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </>
  );
};

export default HomeDashBoard;
