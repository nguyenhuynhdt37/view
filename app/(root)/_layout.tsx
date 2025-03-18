import React from "react";
import { Slot } from "expo-router";
import { View } from "react-native";
import Toast from "react-native-toast-message";
const AppLayout = () => {
  return (
    <View className='flex-1'>
      <Toast />
      <Slot />
    </View>
  );
};

export default AppLayout;
