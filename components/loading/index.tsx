import { View, Text, Image } from "react-native";
import React from "react";
import LoaddingIcon from "@/assets/icons/loading.gif";
import LottieView from "lottie-react-native";
const LoadingButton = () => {
  return (
    <View className='fixed top-0 left-0 right-0 bottom-0 z-30 flex-1'>
      <View className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 '></View>
      <View className='bg-[#000000] top-1/2 left-1/2 z-40 absolute -translate-x-1/2 -translate-y-1/2 rounded-xl'>
        <LottieView
          source={require("../../assets/loadings/loading.json")} // File JSON của animation
          autoPlay
          loop
          style={{ width: 70, height: 70, opacity: 1 }}
        />
      </View>
    </View>
  );
};

export default LoadingButton;
