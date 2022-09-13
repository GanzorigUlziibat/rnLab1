import * as React from "react";
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

function HomeScreen({ navigation }) {
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
        <Box flex="1" safeAreaTop>
          <Box>
            <Button onPress={() => navigation.navigate("Detail")}>
              DETAIL
            </Button>
          </Box>
          <Box>
            <Button onPress={() => navigation.navigate("About")}>ABOUT</Button>
          </Box>
        </Box>
        <Footer selected="0" />
      </Box>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
