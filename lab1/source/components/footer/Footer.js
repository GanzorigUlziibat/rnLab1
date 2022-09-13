import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

export default function Footer(props) {
  //   alert(props.selected);
  const navigation = useNavigation();

  return (
    <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
      <Pressable
        cursor="pointer"
        opacity={props.selected == 0 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <FontAwesome5 name={props.selected == 0 ? "oil-can" : "otter"} />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={props.selected == 1 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={
                  props.selected == 1
                    ? "database-search"
                    : "database-search-outline"
                }
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Search
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor="pointer"
        opacity={props.selected == 2 ? 1 : 0.6}
        py="2"
        flex={1}
        onPress={() => {
          navigation.navigate("Data");
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={props.selected == 2 ? "cart" : "cart-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Cart
          </Text>
        </Center>
      </Pressable>

      <Pressable
        cursor="pointer"
        opacity={props.selected == 3 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={props.selected == 3 ? "account" : "account-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}
