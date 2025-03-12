import { View, Text, Image } from "react-native";
import React from "react";

const PngCustom = ({ icon }: { icon: any }) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

export default PngCustom;
