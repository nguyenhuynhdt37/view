import { Tabs } from "expo-router";
import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "red" }} />;
const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "blue" }} />;

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const [index, setIndex] = useState(0);
  return (
    <View className="flex-1 justify-center items-center">
      <Text>TabView</Text>
    </View>
  );
}
