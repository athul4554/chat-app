import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box>
        <Text fontSize="4xl" fontFamily="Work sans" color="white">
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        bg="#424769"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" color="white">
              Login
            </Tab>
            <Tab width="50%" color="white">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
