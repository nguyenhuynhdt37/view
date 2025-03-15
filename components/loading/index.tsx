import { View, Text, Image } from "react-native";
import React from "react";
import LoaddingIcon from "@/assets/icons/loading.gif";
const LoadingButton = () => {
  return <Image className='size-10' source={LoaddingIcon} />;
};

export default LoadingButton;
