import React, { Component, useState } from "react";
import { View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Footer from "../components/footer/Footer";

function About({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        // maxW="100%"
        alignSelf="center"
      >
        <Center flex={1} safeAreaTop></Center>
        <Footer selected="3" />
      </Box>
    </NativeBaseProvider>
  );
}

export default About;
