import { View, Text } from "react-native";
import React from "react";
import Header from "./header";
import Login from "./login";

const index = () => {
  return (
    <View className="bg-white flex-1">
      <Header />
      <Login />
    </View>
  );
};

export default index;
