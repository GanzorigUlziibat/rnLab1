import * as React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}

export default HomeScreen;
