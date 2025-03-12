import { View, Text } from "react-native";
import React from "react";
import { LucideIcon } from "lucide-react-native";
interface ILineErrror {
  Icon: LucideIcon;
  title: string;
}
const LineErrror = ({ Icon, title }: ILineErrror) => {
  return (
    <View className='flex-row items-center py-2'>
      <Icon width={17} height={17} color={"#f2401c"} />
      <Text className='font-lexend text-[#f2401c] ml-2 text-md'>{title}</Text>
    </View>
  );
};

export default LineErrror;
